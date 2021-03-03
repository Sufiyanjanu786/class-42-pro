var monkey
var ground,invisibleground
var gameState="play"
var FoodGroup, obstacleGroup,spawnfood,spawnObstacle
var banana ,bananaImage, obstacle, obstacleImage
var score=0

function preload(){
  
  monkeyrunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  //adding ground
  groundimg=loadImage("jungle.jpg")
  
  //adding food image
    bananaImage = loadImage("banana.png");
   obstaclImage = loadImage("stone.png");
  
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //adding ground
  ground=createSprite(200,350,6000,200000)
  ground.addImage(groundimg)
 // groundimg.scale=0.00005
  ground.x=ground.width/2
  
  
  //adding invisible ground
  invisibleground=createSprite(350,580,500,20)
  invisibleground.visible=false
  
  //adding monkey
  monkey=createSprite(150,550,20,20);
  monkey.addAnimation("running",monkeyrunning)
  monkey.scale=0.099;
  
  //adding groups 
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
  
  
  
}

function draw() {
  background(220);
  
  monkey.collide(invisibleground)
  
  //adding game states
  if(gameState==="play"){
    
     spawnfood ()
  spawnObstacle ()
    
    if(keyDown("space")&&monkey.y>=300){
     monkey.velocityY=-20
     }
  
  monkey.velocityY=monkey.velocityY+0.8
    
     //adding scoring
      if(FoodGroup.isTouching(monkey)){
     score=score+10
     FoodGroup.destroyEach()
     }
    
    //MAKING MONKEY BIGGER
    switch(score){
      case 10:monkey.scale=0.12;
          break;
          case 20:monkey.scale=0.12;
        break;
      case 30:monkey.scale=0.14;
        break;
      case 40:monkey.scale=0.16;
        break;
      case 50:monkey.scale=0.18;
        break;
          case 60:monkey.scale=0.20;
        break;
          case 70:monkey.scale=0.22;
        break;
          case 80:monkey.scale=0.24;
        break;
          case 90:monkey.scale=0.26;
        break;
    }
    
    if(obstacleGroup.isTouching(monkey)){
       monkey.scale=0.099;
       
       }
    
  }
  
  
  ground.velocityX=-3
  if(ground.x<190){
     ground.x=ground.width/2
     }
  
  
  
  drawSprites();
  
  stroke("white")
  textSize(20)
  fill("white")
  text("SCORE :"+score,500,50)
}

function spawnfood(){
  if(frameCount%80==0){
    food=createSprite(600,50,50)
    food.addImage(bananaImage);
    food.scale=0.09;
    food.velocityX=-10
    food.y=Math.round(random(100,400)) 
    food.lifetime=200;
    FoodGroup.add(food)
  }
  }
  
function spawnObstacle(){
  if(frameCount%150==0){
    var obstacle=createSprite(600,550,20,20);
    obstacle.addImage(obstaclImage);
    obstacle.scale=0.1 
    obstacle.velocityX=-5
    obstacleGroup.add(obstacle)
    
    
  }
     
     
     }
