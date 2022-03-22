import createElement from "../functions/createElement.js";
import checkRow from "../functions/checkRow.js";

let checker = createElement('BUTTON', 'wort überprüefe', '', [
    {id: 'checker'}
])

checker.addEventListener('click', function (e){
    checkRow(e.target.parentElement)
})

export default checker