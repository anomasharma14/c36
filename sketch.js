var database;
var gameState = 0;
var form,game;

function setup(){
  createCanvas(400,400);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();

  console.log(database);
 
}

function draw(){
 
  
}


