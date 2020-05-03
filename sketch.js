var speed,thickness;
var weight; 
var bullet,wall;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
 weight = random(30,52);
bullet=createSprite(200,200,30,10)
   bullet.velocityX=speed
   bullet.shapeColor=color("white")
   thickness=random(22,83)
   wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  
}  

function draw() {
  background("black")
  if(collided (bullet,wall) ){
    bullet.velocityX=0
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0)

    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)

    }
  }
  drawSprites();
  
    
}

function collided(lbullet,lwall){
bullet.RightEdge=lbullet.width+lbullet.x
wall.leftEdge=lwall.x
if(bullet.RightEdge>=wall.leftEdge){
  return true
};
return false;
}