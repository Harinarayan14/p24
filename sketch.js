// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var array1 = [];
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,590,1200,20);
    part1 = new part(175,470,100,50,-45);
    base = new tanker(100,530,100,100);
    ball1 = new Ball(Math.round(random(800,1100)),Math.round(random(200,400)),20);
    ball2 = new Ball(Math.round(random(800,1100)),Math.round(random(200,400)),20);
    ball3 = new Ball(Math.round(random(800,1100)),Math.round(random(200,400)),20);
    array1.push(new CanonBall(part1.x + width/2,part1.y));
}

function draw() {

// Remember to update the Matter Engine and set the background.
background(200);
Engine.update(engine);
ground.display();
part1.display();
base.display();
ball1.display();
ball2.display();
ball3.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode === UP_ARROW && part1.angle>-90){
        part1.angle-=1.8;
    }
    if(keyCode === DOWN_ARROW && part1.angle>5){
        part1.angle+=1.6;
    }
    if(keyCode === RIGHT_ARROW ){
        for(var i = 0;i<array1.length;i++){
            array1[i].display();
        }
    }
}