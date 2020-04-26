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
}