const TOGGLE = document.querySelector('#mode')
const BODY = document.querySelector('body')

function toggleColorMode(){
    let mode = localStorage.getItem('mode')
    if(mode === 'dark'){
        BODY.classList.add('darkmode')
    }
    TOGGLE.addEventListener('click', () => {
        BODY.classList.toggle('darkmode')
        if(BODY.classList.contains('darkmode')){
            TOGGLE.innerHTML = '🌕'
            localStorage.mode = 'dark'
        }else{
            TOGGLE.innerHTML = '🌑'
            localStorage.mode = 'light'
        }
    })
}

export default toggleColorMode