
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var t, s,g,l;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;




function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  //mouseReleased();

 

  s=new stone()
  mango1=new mango(850,210,50)
  mango2=new mango(945,210,50)
  mango3=new mango(970,125,50)
  mango4=new mango(1100,85,50)
  mango5=new mango(935,60,50)
  mango6=new mango(750,220,50)
  mango7=new mango(1150,185,50)
	mango8=new mango(1185,125,50)
  mango9=new mango(1050,200,50)
  mango10=new mango(1020,50,50)
   // t=new tree();

   g=new ground();

  l=new launcher(s.body,{x:240 , y:400});

}

function draw() {

  background(230);
  Engine.update(engine);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,320,200,300);

  g.display();
 // t.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  s.display();
  l.display();

  detectollision(s,mango1);
  detectollision(s,mango2);
  detectollision(s,mango3);
  detectollision(s,mango4);
  detectollision(s,mango5);
  detectollision(s,mango6);
  detectollision(s,mango7);
  detectollision(s,mango8);
  detectollision(s,mango9);
  detectollision(s,mango10);
 
    
}
function mouseDragged(){
 Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    l.fly();
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

}

