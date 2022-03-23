import variables from "./variables.js"
import fetchWords from "./functions/fetchWords.js";
import getRandomWord from "./functions/getRandomWord.js";
import createWordleRow from "./functions/createWordleRow.js";
import toggleColorMode from "./functions/toggleColorMode.js";

toggleColorMode()
createWordleRow(variables.numberOfLetters, variables.container, 1)
fetchWords('../../words.json').then(res => {
    localStorage.setItem(variables.localstorageKey,getRandomWord(res["words"]))
})