const CONTAINER = document.querySelector('#wordle')
const NUMBER_OF_LETTERS = 6
const MAX_NUMBER_OF_TRYS = 6
const COLORS = {
    'positive': '#87af41',
    'warning': '#e8a75c',
    'negative': '#e1506b',
}
const LOCALSTORAGE_KEY = 'word'

export default {
    container: CONTAINER,
    numberOfLetters: NUMBER_OF_LETTERS,
    colors: COLORS,
    localstorageKey: LOCALSTORAGE_KEY,
    maxNumberOfTrys: MAX_NUMBER_OF_TRYS
}