import createElement from "../helpers/createElement.js";
let restart = createElement('BUTTON','nomol spiele', '', [
    {id: 'restart'}
])
restart.addEventListener('click', () => {
    window.location.reload()
})
export default restart