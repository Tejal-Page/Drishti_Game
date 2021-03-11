class Aliens{
  constructor(x, y, r) {
      var options = {
      // isStatic:true,
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1:this.image = loadImage("images/a1.png");break;
        case 2:this.image = loadImage("images/a2.png");break;
        case 3:this.image = loadImage("images/a3.png");break;
        case 4:this.image = loadImage("images/a4.png");break;
      //  case 5:this.image = loadImage("images/a5.webp");break;
        default: break;

      }
      //Matter.Body.setVelocity(this.body,{x:50,y:20}) 

      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r*5, this.r*5);
      pop();
    }
    kaboom(){
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-1;
      //tint(255,255);
      //image(this.exp,400, 400, 300, 200);
      pop();
    }
    myscore(){
      score= score+1;
     
    }
    reappear(){
      if(this.body.position.y>height-200){
        Matter.Body.setPosition(this.body,{x:random(100, displayWidth-200),y:0})
      }
    }
}
