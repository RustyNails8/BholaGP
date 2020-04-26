function setup() {
  createCanvas(900, 440);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    // fill(ee9510);    // Color fill from Bracket plugin Did not work 
    fill(0, 180, 180);  // Use rgb color scheme
    // stroke(0, 0, 255);  // set stroke properties
    // strokeWeight(1);    // set stroke weight
    noStroke();      // remove stroke
        
  }
  ellipse(mouseX, mouseY, 10, 10);
  // other shapes 
/*
    Ellipse: ellipse(x, y, width, height);
    Rectangle: rect(x, y, width, height);
    Triangle: triangle(x1, y1, x2, y2, x3, y3);
    Line: line(x1, y1, x2, y2);
    Point: ellipse(x, y);
    Quadrilateral: quad(x1, y1, x2, y2, x3, y3, x4, y4);
    Arc: arc(a,b,c,d,start,stop,[mode]);
*/
}