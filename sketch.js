
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
 stone1 = new stone(247,416,20);
	mango1=new mango(1100,100,30,true);
    mango2=new mango(970,230,30,true);
	mango3=new mango(1190,200,30,true);
	mango4=new mango(1010,115,30,true);
	mango5=new mango(1085,255,30,true);
	mango6=new mango(1080,180,30,true);
	treeObj=new tree(1050,580);
  ImNotReal = new Slingshot(stone1.body,{x:247,y:416},0.005,30);

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  image(boy ,200,340,200,300);
  
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  groundObject.display();
  ImNotReal.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango6);


}
function mouseDragged() {
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
  
  }
  function mouseReleased() {
  ImNotReal.fly();
  
      
      }
      function detectcollision(s,m) {
mangoBodyPosition = m.body.position;
stoneBodyPosition = s.body.position;


var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y,)
if(distance<=60){
  Matter.Body.setStatic(m.body,false)
}


      }
      
function keyPressed(){
      if(keyCode === 32){

	Matter.Body.setPosition(stone1.body, {x:247  , y:416 });
  ImNotReal = new Slingshot(stone1.body,{x:247,y:416},0.005,30);
}

}