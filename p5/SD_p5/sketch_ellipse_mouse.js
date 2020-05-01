function setup() {
  createCanvas(1024, 1024);
}

function draw() {
  if (mouseIsPressed) {
    fill('#e37e3f');
  } else {
    fill('#62e33f');
  }
  ellipse(mouseX, mouseY, 10, 10);
}