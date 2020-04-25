function setup() {
  createCanvas(1024, 1024);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 10, 10);
}