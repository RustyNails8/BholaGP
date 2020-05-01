//https://p5js.org/examples/form-star.html
function setup() {
  createCanvas(900, 400);
  randH = 10 ;
}

function draw() {
  background('#2243ae');

    if (random() > 0.7) {
        randW = random(6,10);
    } else {
        randW = random(1,5);
    }

    randW=random(width)
    randH=random(1,1000 )
    
  //push();
  //translate(width * 0.8, height * 0.2);
  //rotate(frameCount/800);
  fill('#aca6b3')
  star(randW, randH, 20, 70, 5); randW=random(width) ; randH=random(1,1000) ;
  star(randW, randH, 20, 70, 5);  randW=random(width) ; randH=random(1,1000) ;
  star(randW, randH, 20, 70, 5); randW=random(width) ; randH=random(1,1000) ;
  star(randW, randH, 20, 70, 5); randW=random(width) ; randH=random(1,1000) ;
  star(randW, randH, 20, 70, 5); randW=random(width) ; randH=random(1,1000) ;
  
  //pop();
  
  randH = randH + 4 ;
  if (randH > 1024){
    randH=10
  }
    
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}