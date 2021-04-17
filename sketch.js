const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;


var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;

var ball;
var Slingshot;

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);
  
  ground = new Ground(500,585,width,20);

  stand1= new Ground(450,500,240,10);
  stand2= new Ground(700,400,200,10);

  /////STAND1/////

  //layer1
  block1 = new Box(360,475,30,40);
  block2 = new Box(390,475,30,40);
  block3 = new Box(420,475,30,40);
  block4 = new Box(450,475,30,40);
  block5 = new Box(480,475,30,40);
  block6 = new Box(510,475,30,40);
  block7 = new Box(530,475,30,40);

  //layer2
  block8 = new Box(390,435,30,40);
  block9 = new Box(420,435,30,40);
  block10 = new Box(450,435,30,40);
  block11 = new Box(480,435,30,40);
  block12 = new Box(510,435,30,40);


  //layer3
  block13 = new Box(420,395,30,40);
  block14 = new Box(450,395,30,40);
  block15 = new Box(480,395,30,40);

  //layer4
  block16 = new Box(450,355,30,40);


  ///STAND2/////

  //layer1
  
  block17 = new Box(640,375,30,40);
  block18 = new Box(670,375,30,40);
  block19 = new Box(700,375,30,40);
  block20 = new Box(730,375,30,40);
  block21 = new Box(760,375,30,40);

  //layer2
  block22 = new Box(670,335,30,40);
  block23 = new Box(700,335,30,40);
  block24 = new Box(730,335,30,40);

  //layer3
  block25 = new Box(700,295,30,40);

  ball = new Polygon(200,200,40);

  Slingshot = new  SlingShot(ball.body,{x:200,y:280});


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

  stand1.display();
  stand2.display();


  //layer1
  stroke(15);
  fill("orange")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //layer2
  stroke(15);
  fill("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //layer3
  stroke(15);
  fill("lightgreen");
  block13.display();
  block14.display();
  block15.display();

  //layer4
  stroke(15);
  fill("red");
  block16.display();

  //stand2
  //layer1
  stroke(15);
  fill("cyan");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //layer2
  stroke(15);
  fill("yellow");
  block22.display();
  block23.display();
  block24.display();

  //layer3
  stroke(15);
  fill("black");
  block25.display();



  ball.display();

  Slingshot.display();
  

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  Slingshot.fly();
}
