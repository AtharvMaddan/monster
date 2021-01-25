
const Engine = Matter.Engine;

const World= Matter.World;
const Bodies = Matter.Bodies;
const   MouseConstraint = Matter.Constraint
var backGroundImg
var ground,hero
var engine,world
function preload() {
//preload the images here
backGroundImg = loadImage("GamingBackground.png")
}

function setup() {
  var canvas  = createCanvas(3000, 3000);
  engine = Engine.create();
  world = engine.world;
  // create sprites her
  ground = new Ground(3000,height,800,20);
  hero = new Hero(500,2800,30,40)
}

function draw() {
  background( backGroundImg);
  Engine.update(engine);
  background(0);
ground.display()
hero.display()
}

