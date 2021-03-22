var PLAY=1;
var END=0;
var gameState=1;

var sword,fruitImg;
var swordImage,monsterImage,gameoverImage;
var gameover;
var score=0;
var knifeSound,gameOverSound;

function preload() {
  
  //load images
fruitImg=loadImage("star.png");
  monsterImage1 = loadImage("stone.png");
  swordImage = loadImage("Superhero-02.png");
  


}


function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}


function draw() {
  background("lightblue");
  
  if(gameState === PLAY){
 
  Enemy();
  fruits();
     

  
  if(keyDown(RIGHT_ARROW)){
      sword.x=x+10;
  }

  if(keyDown(LEFT_ARROW)){
    sword.x=x-10;
}
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;

  
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;
       
      

    }
    
  }
  
  drawSprites();
  
  text("Score : " + score,500,50);
  
}


function fruits(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    console.log(position)
     //using random variable change the position of fruit, to make it more challenging
    
    if(position==1)
    {
    fruit.x=400;
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
  //Increase the velocity of fruit after score 4 or 10
      fruit.velocityX=(7+(score/4));
      }
    }
    
    fruit.scale=0.2;
  
  
    
    fruit.y=Math.round(random(50,340));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}
function Enemy() {
  
   if(World.frameCount%200 === 0) { 
     
     monster=createSprite(600,200,20,20);
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     monster.velocityX=-(10+score/10);
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(800,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=-(10+score/10);
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}