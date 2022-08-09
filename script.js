const canvas = document.getElementById('canvas1'); //pointing towards the element tag id we want to work on

const ctx = canvas.getContext("2d");  // method to point towards the propertirs of current canvas object we are working on
//console.log(canvas)


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

const CANVAS_WIDTH = canvas.width = 300// for now canvas width
const CANVAS_HEIGHT = canvas.height = 300// for now canvas height

const playerImage = new Image()  // creating new image, it works same as an image tag
playerImage.src = "shadow_dog.png"//path to source
const spriteWidth = 575  // width to cut from actual image
const spriteHeight = 523 // height to cut from actual image
let frameX = 0  // x-axis location from top left corner
let frameY = 0  // y-axis location from top left corner
let gameFrame = 0  // each frame count with an iteraton
const staggerFrames = 5  // no of times we want to evade the frames from drawing on canvas i.e. 1 ..... 2..... 3

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)  // deletes anything drawn on whole canvas after each iteration 
    //ctx.drawImage(image, sx,sy,sw,sh, dx,dy,dw,dh)
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH-(25/2),CANVAS_HEIGHT-(77/2))
    if (gameFrame % staggerFrames == 0){    // after every 5 eteration value become == 0 so condition meets
        if (frameX < 6) frameX++    // to always change to the next image
        else frameX = 0  // repeat the animation from start
    }

    gameFrame++   // next frame count for another eteration
    requestAnimationFrame(animate)  // runs the function animate once every iteration so animaton begins
}
animate()  // to run the function first time