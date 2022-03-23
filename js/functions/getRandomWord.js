import getRadomNumber from "../helpers/getRandomNumber.js";

function getRandomWord(words){
    return words[getRadomNumber(0,words.length - 1)]
}
export default getRandomWord