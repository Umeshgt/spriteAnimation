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
let frameY = 0
let gameFrame = 0
const staggerFrames = 5

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    //ctx.drawImage(image, sx,sy,sw,sh, dx,dy,dw,dh
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH-(25/2),CANVAS_HEIGHT-(77/2))
    if (gameFrame % staggerFrames == 0){
        if (frameX < 6) frameX++
        else frameX = 0
    }

    gameFrame++
    requestAnimationFrame(animate)
}
animate()