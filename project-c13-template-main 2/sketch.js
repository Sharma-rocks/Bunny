var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
rabbit.x=World.mouseX
spawnApple()


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
 
}
function spawnApple(){
  if(frameCount%80===0){

 // write your code here 
 Apple= creatSprite(random(50,350), 40,10,10);
Apple.addImage(appleImg);
Apple.velocityX=-4
  }
}
