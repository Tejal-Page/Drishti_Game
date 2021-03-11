class Robot{
    constructor(x, y, r) {
        var options = {
            isStatic:true,
            'restitution':0.1,
            'friction':2.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        
        this.image = loadImage("images/r1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*4, this.r*4);
        pop();
      }
}