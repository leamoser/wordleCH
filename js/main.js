import variables from "./variables.js"
import fetchWords from "./functions/fetchWords.js";
import getRandomWord from "./functions/getRandomWord.js";
import createWordleRow from "./functions/createWordleRow.js";

createWordleRow(variables.numberOfLetters, variables.container, 1)

fetchWords('../../words.json').then(res => {
    localStorage.setItem(variables.localstorageKey,getRandomWord(res["words"]))
})