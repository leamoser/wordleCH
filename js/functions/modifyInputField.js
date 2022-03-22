import variables from "../variables.js";
import checkRow from "./checkRow.js";

function modifyInputField(field) {
    const INDEX = parseInt(field.dataset.index)
    const ROWID = parseInt(field.dataset.rowid)

    field.addEventListener('keyup', (e) => {
        //wenn feld ausgefüllt
        if (field.value.length >= 1 && INDEX < variables.numberOfLetters) {
            const NEXT_ELEMENT = document.querySelector(`#row_${ROWID}_${INDEX + 1}`)
            NEXT_ELEMENT.focus()
        }
        //wenn letztes feld gefüllt und dann enter
        if(field.value.length >= 1 && INDEX === variables.numberOfLetters){
            if(e.keyCode === 13) {
                checkRow(field.parentElement)
            }
        }
        //wenn feld leer und zurück und nicht im ersten Feld
        if(INDEX !== 1){
            if(e.keyCode === 8){
                const PREV_ELEMENT = document.querySelector(`#row_${ROWID}_${INDEX - 1}`)
                PREV_ELEMENT.focus()
            }
        }
    })
}

export default modifyInputField