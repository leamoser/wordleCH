import modifyInputField from "../functions/modifyInputField.js";

function placeElements(container, elements){
    elements.forEach(element => {
        if(element.tagName === 'INPUT'){ modifyInputField(element) }
        container.appendChild(element)
    })
}

export default placeElements