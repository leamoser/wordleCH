function createElement(element, inner, classes, attributes) {
    let el = document.createElement(element)
    el.innerHTML = inner
    if(classes){ el.classList.add(classes) }
    attributes.forEach(attribute => {
        for (const attributeKey in attribute) {
            el.setAttribute(attributeKey,attribute[attributeKey])
        }
    })
    return el
}

export default createElement