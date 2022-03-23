import createElement from "../helpers/createElement.js";
import placeElements from "../helpers/placeElements.js";
import checker from "../elements/rowChecker.js";

function createWordleRow(numberOfLetters, container, rowId){
    let elements = []
    for(let i = 0; i < numberOfLetters; i++){
        elements.push(createElement('INPUT', '', `row_${rowId}` , [
            {id: `row_${rowId}_${i + 1}`},
            {'data-rowid': rowId},
            {'data-index': i + 1},
            {maxlength: 1},
            {minlenght: 1},
            {autofocus: i === 0},
            {autocomplete: 'off'}
        ]))
    }
    let wrapper = createElement('DIV', '', 'wrapper', [
        {id: `wrapper_${rowId}`},
        {'data-rowid': rowId}
    ])
    placeElements(container, [wrapper])
    placeElements(wrapper, elements)
    placeElements(wrapper, [checker])
}

export default createWordleRow