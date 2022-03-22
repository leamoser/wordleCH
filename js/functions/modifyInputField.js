import variables from "../variables.js";
import checkRow from "./checkRow.js";

function focusThis(field){
    field.focus()
}
function focusNext(rowId,index){
    if(index < variables.numberOfLetters){
        const NEXT_ELEMENT = document.querySelector(`#row_${rowId}_${index + 1}`)
        NEXT_ELEMENT.focus()
    }
}
function focusPrev(rowId,index){
    if(index !== 1){
        const PREV_ELEMENT = document.querySelector(`#row_${rowId}_${index - 1}`)
        PREV_ELEMENT.focus()
    }
}

function modifyInputField(field) {
    const INDEX = parseInt(field.dataset.index)
    const ROWID = parseInt(field.dataset.rowid)

    if(INDEX === 1){
        focusThis(field)
    }

    field.addEventListener('input', (e) => {
        //wenn feld ausgefüllt
        if (field.value.length >= 1) {
            focusNext(ROWID,INDEX);
        }
    })
    field.addEventListener('keyup', (e) => {
        //wenn enter
        if(e.keyCode === 13) {
            checkRow(field.parentElement)
        }
        //wenn back oder arrow back
        if(e.keyCode === 8 || e.keyCode === 37){
            focusPrev(ROWID,INDEX);
        }
        //wenn arrow front
        if(e.keyCode === 39){
            focusNext(ROWID,INDEX)
        }
    })
}

export default modifyInputField