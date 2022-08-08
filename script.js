const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext("2d");
console.log(canvas)
const CANVAS_WIDTH = canvas.width = 300
const CANVAS_HEIGHT = canvas.height = 300

const playerImage = new Image()
playerImage.src = "shadow_dog.png"
const spriteWidth = 575
const spriteHeight = 523
let frameX = 0
let frameY = 8
let gameFrame = 0
const staggerFrames = 5

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    position = Math.floor(gameFrame/staggerFrames) % 10
    frameX = spriteWidth * position
    ctx.drawImage(playerImage, frameX, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH-(25/2),CANVAS_HEIGHT-(77/2))


    gameFrame++
    requestAnimationFrame(animate)
}
animate()