import variables from "../variables.js";
import createWordleRow from "./createWordleRow.js";
import placeElements from "./placeElements.js";
import restart from "../elements/restartButton.js";
import generateEmojiResult from "./generateEmojiResult.js";

function checkRow(wrapper){
    const ROWID = wrapper.dataset.rowid
    const FIELDS = document.querySelectorAll(`.row_${ROWID}`)
    const WORD = localStorage.getItem('word')
    let numberOfCorrectLetters = 0
    for (let i = 0; i < WORD.length; i++){
        let correctLetter = WORD.toUpperCase().includes(FIELDS[i].value.toUpperCase()) && FIELDS[i].value !== ''
        let correctLetterAtCorrectPlace = FIELDS[i].value.toUpperCase() === WORD[i].toUpperCase()
        if(correctLetter && correctLetterAtCorrectPlace) {
            FIELDS[i].style.background = variables.colors.positive
            FIELDS[i].setAttribute('data-state', 'positive')
            numberOfCorrectLetters++
        }else if(correctLetter && !correctLetterAtCorrectPlace){
            FIELDS[i].style.background = variables.colors.warning
            FIELDS[i].setAttribute('data-state', 'warning')
        }else{
            FIELDS[i].style.background = variables.colors.negative
            FIELDS[i].setAttribute('data-state', 'negative')
        }
        FIELDS[i].setAttribute('disabled', 'true')
    }
    if(numberOfCorrectLetters < variables.numberOfLetters){
        createWordleRow(variables.numberOfLetters,variables.container,ROWID + 1)
    }else{
        generateEmojiResult()
        placeElements(wrapper.parentElement, [restart])
    }
}

export default checkRow