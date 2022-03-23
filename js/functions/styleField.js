import variables from "../variables.js";

function styleField(field,type){
    field.style.background = variables.states[type].color
    field.setAttribute('data-state', type)
    field.setAttribute('disabled', 'true')
}

export default styleField