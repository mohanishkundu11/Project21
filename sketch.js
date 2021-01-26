var fixedRect, movingRect;

var topSide; 
var bottomSide;  
var leftSide; 
var rightSide; 

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 100, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(400, 800,80,30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect.velocityY = 5; 
  movingRect.velocityX = 5;

  // Creating Sides 
  topSide = createSprite(600,800,80,20);
  
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect); 
 
  drawSprites();
}







