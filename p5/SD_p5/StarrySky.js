// https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b

function setup() {
    // createCanvas(900, 400);
    createCanvas(windowWidth-10, windowHeight-20);
}
function draw() {
    background(220);
    var color1 = color('#eda216');
    var color2 = color('#7f8aea');
    setGradient(0, 0, windowWidth, windowHeight, color2, color1, "Y");


    for (var i = 0; i < 50; i++) {
        // Code goes here
        var x = random(windowWidth) //*10;
        var y = random(windowHeight-(windowHeight/2));
        noStroke();
        fill(255, 255, 0);
        ellipse(x, y, 5, 5);

    }

    frameRate(4);
}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}


