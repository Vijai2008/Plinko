const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(400,800,800,20);
  
    for(var k=0; k<=800; k=k+80){
      divisions.push(new Division(k,650,10,300))
    }

    for(var k=75; k<=800; k=k+50){
      plinkos.push(new Plinko(k,75))
    }

    for(var k=50; k<=790; k=k+50){
      plinkos.push(new Plinko(k,175))
    }

    for(var k=75; k<=800; k=k+50){
      plinkos.push(new Plinko(k,275))
    }

    for(var k=50; k<=790; k=k+50){
      plinkos.push(new Plinko(k,375))
    }
}

function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount%60===0){
     particles.push(new Particle(random(100,700),-10,10));
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }

  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

  ground.display();
}