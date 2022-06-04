var bg, bgImg;
var bird, birdFlying, birdCollided;
var aeroplane, aeroplaneImg;
var restart, restartImg;
var gameOver, gameOverImg;

function preload(){
  bgImg = loadImage("bg.png");
  birdFlying = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png");
  birdCollided = loadAnimation("birdcollided.png");
  aeroplaneImg = loadImage("aeroplane.png");
  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameover.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg);
  bg.scale = 1.5;

  bird = createSprite(width/2, height/2);
  bird.addAnimation("birdFlying", birdFlying);
  bird.scale = 0.5;

  invisibleGround = createSprite(width/2,height,windowWidth,10);
  invisibleGround.visible = false;
  invisibleGround2 = createSprite(width/2,0,windowWidth,10);
  invisibleGround2.visible = false;

  bg.velocityX=-4;
}

function draw(){
  background(bgImg);
  
 if ( bg.x<0){
    bg.x=width/2;
  }

  bird.collide(invisibleGround);
  bird.collide(invisibleGround2);
  spawnAeroplane();

  drawSprites();
}

function spawnAeroplane(){
  if(frameCount%150 == 0){
    var aeroplane = createSprite(windowWidth+50, 100);
    aeroplane.addImage(aeroplaneImg);
    aeroplane.y=Math.round(random(100,height))
    aeroplane.velocityX=-5;
    aeroplane.scale=0.7;
  }

  
}
