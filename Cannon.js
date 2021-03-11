class Cannon {
    constructor(x, y, r) {
      var options = {
        isStatic:true,
        restitution:0.1,
        friction:1,
        density:1
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("magenta");
      fill("red");
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r);
      
      pop();
    }
  }