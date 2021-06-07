const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
  bgI=loadImage("bg.webp");
}
function setup() {
  createCanvas(3000, 600);

  engine = Engine.create();
  world = engine.world;
  
  
 
  
  ground= new Ground(1500,595,3000,10);
  superhero = new SUperHEro(200,300,170,170);
  rope= new Rope(superhero.body,{x:200,y:170});
  g2= new Ground(500,477,1000,1);
  Monster = new monster(850, 470, 177, 177);

  box1 = new Box(500, 170, 70, 70);
  box2 = new Box(500, 170, 70, 70);
  box3 = new Box(500, 170, 70, 70);
  box4 = new Box(500, 170, 70, 70);
  box5 = new Box(500, 170, 70, 70);
  box6 = new Box(500, 170, 70, 70);
  box7 = new Box(600, 170, 70, 70);
  box8 = new Box(600, 170, 70, 70);
  box9 = new Box(600, 170, 70, 70);
  box10 = new Box(600, 170, 70, 70);
  box11 = new Box(600, 170, 70, 70);
  box12 = new Box(600, 170, 70, 70);
  box13 = new Box(700, 170, 70, 70);
  box14 = new Box(700, 170, 70, 70);
  box15 = new Box(700, 170, 70, 70);
  box16 = new Box(700, 170, 70, 70);
  box17 = new Box(700, 170, 70, 70);
  box18 = new Box(700, 170, 70, 70);
  box19 = new Box(700, 170, 70, 70);
  box20 = new Box(700, 120, 70, 70);

  

  
}

function draw() {
  background(bgI);
  Engine.update(engine);
  ground.display();
  superhero.display();
  rope.display();
  Monster.display();
  g2.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
 
      
}


function mouseDragged() {
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}



 