
var pos;
var prev;
var w;
var h;

w = 600;
h = 600;

function setup() {
  createCanvas(w, h);
background(0);
  pos = createVector(mouseX, mouseY);
  prev = pos.copy();
  console.log(pos);
}

function draw() {
  pos.x = constrain(pos.x, 0, w);
  pos.y = constrain(pos.y, 0, h);

  stroke(255);
  strokeWeight(1);
  noFill();
  line(pos.x, pos.y, prev.x, prev.y);
  stroke(255);
  prev.set(pos);

  var step = p5.Vector.random2D();

  var r = random(100);
  if (r < 1) {
    step.mult(random(50, 120));
  } else {
    step.setMag(20);
  }

  //pos = pos + step;
  pos.add(step);

  var d = int(dist(pos.x, pos.y, prev.x, prev.y));
  if (d>5){
    fill(random(255),random(255),random(255),50);
    noStroke();
    triangle(pos.x, pos.y, prev.x, prev.y,w/2, h/2);
  }

}

function mousePressed(){
  setup();
}
