class CanonBall{
  constructor(x, y) {
      var options = {
        "density" :   1.5,
        "friction" : 1.0,
        "restitution" : 0.8,
        "frictionAir":0.06
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width =40;
      this.height = 40;
      this.image = loadImage("assets/canonBall.png");
      World.add(world, this.body);
    }
    display(){
      push();
      imageMode(CENTER);
      image(this.image, 0, 0, 40, 40);
      pop();
    }
}