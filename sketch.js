var dusbin,ball,zameen;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dusbin = new dustbin();
	ball = new paper(200,670,20);
	zameen = new Ground();

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
dusbin.display();
ball.display();
zameen.display();

console.log(ball.body.position.y);


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:12,y:-12});

	}
}
