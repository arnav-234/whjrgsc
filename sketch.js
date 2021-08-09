var space
 var iss
var spaceimg


function setup() {
  createCanvas(800,400);
  spaceigm=createSprite(400, 200, 50, 50);
}
function preload(){
spaceimg("spacecraft2.png")

}
function draw() {
  background(255,255,255);  
  drawSprites();
}