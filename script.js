playerState = "idle";
const canvas = document.getElementById('canvas1');
const dropdown = document.getElementById("animations")
dropdown.addEventListener("change", (e) => {
    playerState = e.target.value
}
)

const ctx = canvas.getContext("2d");
console.log(canvas)
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = "shadow_dog.png"
const spriteWidth = 575
const spriteHeight = 523
var frameX
var frameY
let gameFrame = 0    // change this value
const staggerFrames = 5
playerState = "idle"

spriteAnimation = {
    idle : {
        positionY: 0,
        frames: 7
    },
    jump :{
        positionY: 1,
        frames: 7
    },
    fall :{
        positionY: 2,
        frames: 7
    },
    run : {
        positionY: 3,
        frames: 9
    },
    dizzy : {
        positionY: 4,
        frames: 11
    },
    sit : {
        positionY: 5,
        frames: 5
    },
    roll : {
        positionY: 6,
        frames: 7
    },
    bite : {
        positionY: 7,
        frames: 7
    },
    ko : {
        positionY: 8,
        frames: 12
    },
    getHit : {
        positionY: 9,
        frames: 4
    }
};

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    position = Math.floor(gameFrame/staggerFrames) % spriteAnimation[playerState].frames
    frameX = position * spriteWidth
    frameY = spriteAnimation[playerState].positionY
    ctx.drawImage(playerImage, frameX, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH,CANVAS_HEIGHT)


    gameFrame++
    requestAnimationFrame(animate)
}
animate()