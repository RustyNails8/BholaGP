//https://medium.com/@eselbeus/animation-logic-with-p5-js-85759a97134a
var maxCircleSize = 20;
var phase = 0, speed = 0.03;
 
function setup() {
    createCanvas(900, 440);
}
 
function draw() {
    background(255);
    var x = width/2;
    var y = height/2 + sin(phase) * 50;
    phase = frameCount * speed;
    var sizeOffset = (cos(phase) + 1) * 0.5;
    var circleSize = sizeOffset * maxCircleSize;
    fill(100,100,200);
    ellipse(x, y, circleSize, circleSize);

}