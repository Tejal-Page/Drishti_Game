class Slingshoot{
constructor(bodyA, pointB){
var options ={
bodyA:bodyA,
pointB:pointB,
stiffness: 0.04,
length:10
}
this.chain = Constraint.create(options);
this.image1 = loadImage("sprites/sling1.png");
this.image2 = loadImage("sprites/sling2.png");
this.image3 = loadImage("sprites/sling3.png");
World.add(world,this.chain);   
}
display(){
image(this.image1,200,20);
image(this.image2,170,20);
//image(this.image3)
if(this.chain.bodyA){
var pointA = this.chain.bodyA.position; //starting point
var pointB = this.chain.pointB; // ending point
push();
strokeWeight(4);
stroke(48,22,8);
if(pointA.x<200){

    line(pointA.x-20,pointA.y,pointB.x-2,pointB.y-40)
    line(pointA.x-20,pointA.y,pointB.x+50,pointB.y-50)
    image(this.image3,pointA.x-29,pointA.y-2,10,30)

}
if(pointA.x>200){
    line(pointA.x+20,pointA.y,pointB.x+2,pointB.y-40)
    line(pointA.x+20,pointA.y,pointB.x+50,pointB.y-50)
    image(this.image3,pointA.x+20,pointA.y-2,10,30)

}
pop();
}

}
fly(){
this.chain.bodyA = null;


}
attach(body){
    this.chain.bodyA= body;
    
}
}