import variables from "../variables.js";

function generateEmojiResult(){
    const ROWS = variables.container.children
    let log = ''
    for(let i = 0; i < ROWS.length; i++){
        const CELLS = ROWS[i].children
        for(let e = 0; e < CELLS.length; e++){
            if(CELLS[e].nodeName === 'INPUT'){
                log += variables.states[CELLS[e].dataset.state].emoji
            }
        }
        log += '\n'
    }
    log += '-wordleCH-'
    console.log(log)
}

export default generateEmojiResult