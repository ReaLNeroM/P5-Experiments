function setup() {
  createCanvas(400, 400, WEBGL);
  angle = 0.0;
}

function draw() {
  background(220);

  rectMode(CENTER);
  rotateX(0.03 * angle);
  rotateY(0.02 * angle);
  fill(255, 255, 255);
  box(50, 50);

  translate(25, 25);
  box(50, 50);

  angle += 1;
}