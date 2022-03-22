import variables from "../variables.js";
function generateEmojiResult(){
    const ROWS = variables.container.children
    let log = ''
    const STATES = {
        positive: {
            emoji: '🟩'
        },
        warning: {
            emoji: '🟨'
        },
        negative: {
            emoji: '🟥'
        }
    }
    for(let i = 0; i < ROWS.length; i++){
        const CELLS = ROWS[i].children
        for(let e = 0; e < CELLS.length; e++){
            if(CELLS[e].nodeName === 'INPUT'){
                log += STATES[CELLS[e].dataset.state].emoji
            }
        }
        log += '\n'
    }
    log += '-wordleCH-'
    console.log(log)
}
export default generateEmojiResult