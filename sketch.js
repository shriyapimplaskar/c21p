var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
speed = random(55,90);
weight= random (400,1500);
  car = createSprite(50, 200, 70, 50);
wall = createSprite(1000,200,30,height/2);
car.velocityX=speed;
car.shapeColor = "white";
car.debug = true;
}

function draw() {
  background(0,0,0);  
Deformation=(0.5*weight*speed*speed)/22500;
if(car.collide(wall)){
if(Deformation<100){
  car.shapeColor = "green";
}
else if (Deformation>100&&Deformaton<180){
  car.shapeColor = "yellow";
}
else if (Deformation>180){
  car.shapeColor = "red";
}
}
drawSprites();
}
