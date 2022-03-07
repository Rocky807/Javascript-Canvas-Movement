let canvas = document.getElementById("movement");
let ctx = canvas.getContext("2d");

class Object{
  constructor(){
    this.head = [25, 25];
    this.bodyX = 25;
    this.bodyY = 25;
    this.velocityX = 0;
    this.velocityY = 0;
  }
  draw(){
    ctx.fillStyle = "blue";
    ctx.fillRect(this.head[0], this.head[1], this.bodyX, this.bodyY);
  }
  movement(){
    this.head[0] += this.velocityX;
    this.head[1] += this.velocityY;
  }
}

const object = new Object();

function drawObject(){
  object.draw();
  object.movement();
}

function drawBackground(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
function keyDown(e){
  if(e.keyCode == 87 || e.keyCode == 38){
    object.velocityY = -1;
    object.velocityX = 0;
  }
  if(e.keyCode == 83 || e.keyCode == 40){
    object.velocityY = 1;
    object.velocityX = 0;
  }
  if(e.keyCode == 65 || e.keyCode == 37){
    object.velocityX = -1;
    object.velocityY = 0;
  }
  if(e.keyCode == 68 || e.keyCode == 39){
    object.velocityX = 1;
    object.velocityY = 0;
  }
}

function startGame(){
  let speed = 1;
  drawBackground();
  drawObject();
  setTimeout(startGame, speed);
}

startGame(); 