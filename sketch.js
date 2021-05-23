var c,cImage
var monkey , monkeyRunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground


function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  score=0;
  
  cImage=loadImage('jungle copy.png');
  

 
}



function setup() {
  createCanvas(400,400);
  
    c=createSprite(200,200,10,10);
  c.addImage(cImage);
  c.scale=1.3
  
  monkey=createSprite(50,350,10,10);
  monkey.addAnimation('monkey',monkeyRunning);
  monkey.scale=0.1
  
  ground=createSprite(200,390,1000,10);
  ground.shapeColor='brown';
  
    FoodGroup=createGroup();
  obstacleGroup=createGroup();


  
}


function draw() {
  
  background('pink');
  

  if(getFrameRate()/1){
    score=score+1;
  }
  
  
  
  
  ground.velocityX=-(4+score/10);
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown('space')&&monkey.y>280){
    monkey.velocityY=-10;
     
  }
  
  monkey.velocityY=monkey.velocityY+0.9;
  
  

  food();
  obstacl();
  
  drawSprites();
  
    stroke('yellow');
  textSize(20);
  fill('yellow');
  text('survival time: '+score,130,30);
}

function food(){

if(frameCount%200===0) { 
  banana=createSprite(500,300,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1 
  banana.velocityX=-(4+score/500);

  FoodGroup.add(banana);
    banana.lifetime=500;
 }
  

}

function obstacl(){

  if(frameCount%300===0){
    obstacle=createSprite(500,370,100,100);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-(4+score/500);
    obstacle.scale=0.1
    obstacleGroup.add(obstacle);
     obstacle.lifetime=500;
    
  }

}






