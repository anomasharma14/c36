class Form{
    constructor(){

    }
    display(){
var title = createElement('h1')
title.html("Car racing Game");
title.position(370,100);

var input = createInput("Name");
var button = createButton('Play');

input.position(370,190);
button.position(500,230);

button.mousePressed(function(){
input.hide();
button.hide();

var name = input.value(); 

var greetings  = createElement('h2');
greetings.html("hi Namaste" + name)
greetings.position(400,200);


})
    }
}