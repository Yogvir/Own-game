

var playerName;
var venon,police,scaredPerson,devil;

var venon1img, venon2img;
var poilce1img,police2img,police3img,police4img;
var scaredPerson1img,scaredPerson2img,scaredPerson3img;
var devil1img,devil2img;
var backgroundImg;


function preload() {
venon1img= loadImage("images/venon1.png");
venon2img = loadImage("images/venon2.png");
police1img = loadImage("images/police1.png");
police2img = loadImage("images/police2.png");
police3img = loadImage("images/police3.png");
police4img = loadImage("images/police4.png");
scaredPerson1img = loadImage("images/scaredPerson1.png");
scaredPerson2img = loadImage("images/scaredPerson2.png");
scraedPerson3img = loadImage("images/scaredPerson3.png");
devil1img = loadImage("images/devil1.png");
devil2img = loadImage("images/devil2.png");
backgroungImg= loadImage("images/bg.jpeg");
backgroundImg= loadImage("images/bg2.jpeg");
backgroundImg= loadImage("images/bg3.jpeg");

	
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  


 
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
}
