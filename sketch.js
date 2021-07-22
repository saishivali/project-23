const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,computerbase

function preload() {
  
  computerbaseImage = loadImage("./assets/base2.png");

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computerbase = new ComputerBase(200,200,20,20)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("red");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display()

   //display Player and computerplayer


}
