//https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
// Where is the circle
let x, y;

function setup() {
  createCanvas(900, 440);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(200);
  
  // Draw a circle
  stroke(1);
    
    fill(100);
    ellipse(x, y, 60, 60);
  
    fill(10,0,121)
    ellipse(x+20, y-10, 24, 24);
    fill(10,0,121)
    ellipse(x-20, y-10, 24, 24);

    /*
    fill(10,0,121)
    ellipse(x+20, y+10, 24, 24);
    fill(115,0,225)
    ellipse(x-20, y+10, 24, 24);
    */
    
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;    
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  

  }
}