var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  movingRect=createSprite(300, 200, 50, 100)
}

function draw() {
  background(0);  

movingRect.x=mouseX
movingRect.y=mouseY

if(fixedRect.x-movingRect.x == fixedRect.width/2 + movingRect.width/2||
  movingRect.x-fixedRect.x == fixedRect.width/2 + movingRect.width/2||
  
  fixedRect.y-movingRect.y == fixedRect.height/2 + movingRect.height/2||
  movingRect.y-fixedRect.y == fixedRect.height/2 + movingRect.height/2
  ){

fixedRect.shapeColor="red"
movingRect.shapeColor="blue"
}
else{
fixedRect.shapeColor="white"
movingRect.shapeColor="green"


}

  drawSprites();
}