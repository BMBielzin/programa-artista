function setup() {
  createCanvas(600, 600);
  background("darkblue")
}      

function draw() {
  fill("red")
  if(mouseIsPressed)
  rect(mouseX,mouseY,50,50);
  stroke("rgb(255,255,0)")
strokeWeight(10)
}    