//https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
//https://medium.com/@eselbeus/animation-logic-with-p5-js-85759a97134a
var phase = 0, speed = 0.03;
 
function setup() {
  createCanvas(900, 440);
}
 
function draw() {
  background(225);
  var x = width/2;
  var y = height/2 + sin(phase) * 50;
  phase = frameCount * speed;
  fill(100)
  ellipse(x, y, 10, 10);
}