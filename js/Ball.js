class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic:1,
        inertia: Infinity,
        restitution: 1,

    }
    this.body = Bodies.circle(x,y,radius,options);
    this.body.radius = radius;
    World.add(world,this.body);
  }

  display() {
    var pos = this.body.position;
    stroke(0);
    fill(255);
    rectMode(RADIUS);
    circle(pos.x,pos.y,2*this.body.radius);
  }
}
