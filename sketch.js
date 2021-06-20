var car,wall,speed,weight; 

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapecolor="red";
  wall=createSprite(1500,200,60,height/2);
  wall.shapecolor="blue";
}
function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180){
    car.shapecolor="red";  
    }
    if (deformation<180&&deformation>100){
      car.shapecolor="yellow";  
      }
      if (deformation<100){
        car.shapecolor="green";  
        }
  }
  drawSprites();
}