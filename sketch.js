const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinko = [];

function preload(){

}
function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);

  div1 = new Division(80,655,5,250);
  div2 = new Division(160,655,5,250);
  div3 = new Division(240,655,5,250);
  div4 = new Division(320,655,5,250);
  div5 = new Division(400,655,5,250);
  div6 = new Division(476,655,5,250);
  div7 = new Division(4,655,5,250);

  for(var p = 38; p <= width; p = p+50){
    plinko.push(new Plinko(p, 75, 10));

    for(var  g = 38; g <= width; g = g+50){
      plinko.push(new Plinko(p, 175, 10));
      
      for(var  g = 38; g <= width; g = g+50){
        plinko.push(new Plinko(p, 275, 10));

        for(var  g = 38; g <= width; g = g+50){
          plinko.push(new Plinko(p, 375, 10));
        
        }
      }
    }
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  ground.display(); 
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
 
  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }


  drawSprites();
}