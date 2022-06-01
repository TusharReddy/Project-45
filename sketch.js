var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background;
var climber, climberImg1, climberImg2, climberImg3;
var mountain;
var score = 0;

function setup() {
  createCanvas(2000, 2000,  windowWidth, windowHeight); 
  
  climber = createSprite(800, 800, 100, 200);
  climber.setCollider('circle',0,0,350);
  climber.velocityY = -0.5;
  // trex.debug=true;


 // mountain = createSprite(900, 2000, windowWidth, windowHeight);
 // mountain.velocityY = -(6 + 3*score/100);

  // invisibleGround.visible =false;

  score = 0;
}

function draw() {
  //trex.debug = true;
  background("black");
  textSize(20);
  fill("orange");
  text("Score: "+ score,30,50);
  
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
  //  mountain.velocityY = -(6 + 6*score/100);  
    
    //if(touches.length > 0 && climber.y  >= width+120) {
      //climber.velocityY = 2;
       //touches = [];
    //}
    
    climber.velocityY = climber.velocityY - 0.01 
  
   // if (mountain.x < 0){
     // mountain.x = mountain.width/2;
   // }
  
    
    
  }
  else if (gameState === END) {
  
    //set velcity of each game object to 0
    //mountain.velocityY = 0;
    climber.velocityX = 0;
    
    
    //set lifetime of the game objects so that they are never destroyed
   
    if(touches.length>0) {      
      reset();
      touches = []
    }
  }
  
  
  drawSprites();
}

function reset(){
  gameState = PLAY;
  score = 0;
  
}