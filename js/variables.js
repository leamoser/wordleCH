const CONTAINER = document.querySelector('#wordle')
const NUMBER_OF_LETTERS = 6
const MAX_NUMBER_OF_TRYS = 6
const STATES = {
    correct: {
        emoji: '🟩',
        color: '#87af41'
    },
    contained: {
        emoji: '🟨',
        color: '#e8a75c'
    },
    wrong: {
        emoji: '🟥',
        color: '#e1506b'
    }
}
const LOCALSTORAGE_KEY = 'word'

export default {
    container: CONTAINER,
    numberOfLetters: NUMBER_OF_LETTERS,
    localstorageKey: LOCALSTORAGE_KEY,
    maxNumberOfTrys: MAX_NUMBER_OF_TRYS,
    states: STATES
}