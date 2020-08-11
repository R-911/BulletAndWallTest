var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);

 thickness = random(22,83);
  wall = createSprite(1100, 200, thickness, height/2);
  bullet = createSprite(50, 200, 20, 10);
  speed = random(223, 321);
  weight = random(30, 50);
  bullet.velocityX = speed;
}

function draw() {
  background("blue");  

   wall.shapeColor = "80, 80, 80";
   bullet.shapeColor= "white"

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*weight*speed)/(thickness*thickness*thickness);
    
    if(damage< 10){
      wall.shapeColor = "green";
    }
    if(damage>= 10){
      wall.shapeColor = "red";
    }
    
  }
  drawSprites();
}