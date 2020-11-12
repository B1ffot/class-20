var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  movingRect = createSprite(600,800,60,60);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityY = 2;
  movingRect.velocityY = -2;
}

function draw() {
  background(0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    fixedRect.velocityY = (-1)*fixedRect.velocityY;
    movingRect.velocityY = (-1)*movingRect.velocityY;
  }
  /*else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }*/
  drawSprites();
}