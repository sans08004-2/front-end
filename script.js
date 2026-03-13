const player = document.getElementById("player")
const goal = document.getElementById("goal")
const msg = document.getElementById("msg")

let x = 50
let y = 300
let velocityY = 0
let gravity = 0.6
let jumping = false

const keys = {}

document.addEventListener("keydown", e => keys[e.key] = true)
document.addEventListener("keyup", e => keys[e.key] = false)

function update(){

    if(keys["ArrowRight"]) x += 5
    if(keys["ArrowLeft"]) x -= 5

    if(keys[" "] && !jumping){
        velocityY = -12
        jumping = true
    }

    velocityY += gravity
    y += velocityY

    if(y >= 300){
        y = 300
        velocityY = 0
        jumping = false
    }

    player.style.left = x + "px"
    player.style.top = y + "px"

    checkGoal()

    requestAnimationFrame(update)
}

function checkGoal(){
    const playerRect = player.getBoundingClientRect()
    const goalRect = goal.getBoundingClientRect()

    if(
        playerRect.left < goalRect.right &&
        playerRect.right > goalRect.left &&
        playerRect.top < goalRect.bottom &&
        playerRect.bottom > goalRect.top
    ){
        msg.innerText = "🎉 Você venceu!"
    }
}

update()
