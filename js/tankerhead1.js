class tankerhead{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.body.angle = angle;
        this.depth = 10;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
    
        push();
        angleMode(DEGREES);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }
}