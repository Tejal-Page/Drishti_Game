
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var score = 0;
var robot;
var aliens=[];
var alien;
function preload() {
    backgroundImg = loadImage("images/b3.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    robot = new Robot(displayWidth-250,height-200,100);
    ground = new Ground(width/2,height,width,20);
    cannon = new Cannon(displayWidth-250,height-200,20)
 
    
}

function draw(){
    background(backgroundImg);
    fill("white");
    stroke("white");
    textSize(20)
    text("SCORE:"+score, 100,100)
    Engine.update(engine);  
    cannon.display();
    robot.display();
    ground.display();
  //cannon.body.position.x = robot.body.position.x;
  //cannon.body.position.y = robot.body.position.y;
    if(frameCount %200 ===0){
   
      aliens.push(new Aliens(random(100, displayWidth-200), 0, 50))
  
    }
   for(i = 0; i<aliens.length; i=i+1){
    aliens[i].display();
  
    if(detectCollision(aliens[i],cannon)){
      aliens[i].kaboom();
      aliens[i]=null;
      score=score+1;
   }
  
  }
   

 
  
 
}
function keyPressed(){

  if(keyCode === UP_ARROW ){//shoots the cannon
    Matter.Body.setStatic(cannon.body,false)
    Matter.Body.applyForce(cannon.body,cannon.body.position, {x:-20,y:-80})
  }
  if(keyCode === 32){//reloads the cannon
    Matter.Body.setStatic(cannon.body,true)
    Matter.Body.setPosition(cannon.body, {x:robot.body.position.x,y:robot.body.position.y})
  }
}
function mouseDragged(){//moves the robot
  
  Matter.Body.setPosition(robot.body, {x:mouseX,y:displayHeight-200})
  //cannon.body.position.x = robot.body.position.x;
  //cannon.body.position.y = robot.body.position.y;
 // Matter.Body.setPosition(cannon.body, {x:mouseX,y:displayHeight-200})
 Matter.Body.setPosition(cannon.body, {x:robot.body.position.x,y:robot.body.position.y})

}

function detectCollision(lrobot,lalien){

  robotBodyPosition=lrobot.body.position
  alienBodyPosition=lalien.body.position
  
  var distance=dist(robotBodyPosition.x, robotBodyPosition.y, alienBodyPosition.x, alienBodyPosition.y)
 
  	if(distance<=lrobot.r+lalien.r)
    {    
      return true;
    }
 }
