//object creation
var player, ob1, ob2, ob3, ob4, gp,congrats;
var playerImg, ob1Img, ob2Img, ob3Img, ob4Img, gpImg,congImg;
var ground, bgImg;
var rand1;
var edges1,edges2,edges3,edges4,edges5;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;

//load the images
function preload(){
  playerImg= loadImage("images/ironman.png");
  ob1Img= loadImage("images/camerica.png");
  bgImg= loadImage("images/bg.jpg");
  gpImg= loadImage("images/gp.png");
  ob2Img= loadImage("images/bv.png");
  ob3Img= loadImage("images/thanos.png");
  ob4Img= loadImage("images/Hawkeye.png");
  congImg=loadImage("images/cong.jpg");
}

function setup() {
  createCanvas(1300,600);
  //make the ground
  ground= createSprite(680,320);
  ground.addImage(bgImg);
  ground.scale=1;
 //make the player
  player= createSprite(100,300);
  player.addImage(playerImg);
  player.scale=0.1;
  congrats= createSprite(700,300);
  congrats.addImage(congImg);
  congrats.scale=1;
  //make the obstacles
  ob1=createSprite(290,300);
  ob1.addImage(ob1Img);
  ob1.scale=0.07;
  ob2=createSprite(490,300);
  ob2.addImage(ob2Img);
  ob2.scale=0.1;
  ob3=createSprite(690,300);
  ob3.addImage(ob3Img);
  ob3.scale=0.5;
  ob4=createSprite(890,300);
  ob4.addImage(ob4Img);
  ob4.scale=0.2;
  
 //make the goal post for the football ground
 gp= createSprite(1250,280);
 gp.addImage(gpImg);
 gp.scale=0.25
 score=0;
 edges=createEdgeSprites();
  ob1.velocityY=-5;
 ob2.velocityY=5;
 ob3.velocityX=5;
 ob4.velocityX=-5;

}

function draw() {
  background(0); 
 
 if (gameState===PLAY){

  // giving the funtionality so that player and obstcales can bounce off the edges of the screen
 
  player.bounceOff(edges);
  ob1.bounceOff(edges);
  ob2.bounceOff(edges);
  ob3.bounceOff(edges);
  ob4.bounceOff(edges);
  //giving the up, right and left arrow key function for the player
  if (keyDown(UP_ARROW)){
    player.y=player.y-3;
  }
  
  if (keyDown(RIGHT_ARROW)){
    player.x=player.x+3;
  }

  if (keyDown(DOWN_ARROW)){
    player.y=player.y+3;
  }

  if (keyDown(LEFT_ARROW)){
    player.x=player.x-3;
  }
  score = score + 50;
   //giving the velocity to the obstacles
 
  congrats.visible=false;
  if (player.isTouching(ob1)||player.isTouching(ob2)||player.isTouching(ob3)||player.isTouching(ob4)){
    gameState=END;
   
    }
  if (player.isTouching(gp)){
     // gameState=END;
     congrats.visible=true;
     disappear();
    }
 }

else if (gameState===END){
    background("blue");
    disappear();
    stroke("white");
    strokeWeight(4);
    fill("purple");
    textSize(30);
    text("You've lost, Try Again!!",600,300);
   
 }

 keyPressed();
  drawSprites();

}
function disappear(){
    ob1.velocityY=0;
    ob2.velocityY=0;
    ob3.velocityX=0;
    ob4.velocityX=0;
    player.visible=false;
    ob1.visible=false;
    ob2.visible=false;
    ob3.visible=false;
    ob4.visible=false;
    ground.visible=false;
    gp.visible=false;
}
function keyPressed(){
  if(keyCode === 32){
    gameState=PLAY;
    appear();
  }
}
function appear(){
  ob1.velocityY=-5;
  ob2.velocityY=5;
  ob3.velocityX=5;
  ob4.velocityX=-5;
  player.visible=true;
  ob1.visible=true;
  ob2.visible=true;
  ob3.visible=true;
  ob4.visible=true;
  ground.visible=true;
  gp.visible=true;
}
