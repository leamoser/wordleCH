const TOGGLE = document.querySelector('#mode')
const BODY = document.querySelector('body')

function toggleColorMode(){
    TOGGLE.addEventListener('click', () => {
        BODY.classList.toggle('darkmode')
        if(BODY.classList.contains('darkmode')){
            TOGGLE.innerHTML = '🌕'
        }else{
            TOGGLE.innerHTML = '🌑'
        }
    })
}

export default toggleColorMode