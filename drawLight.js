function setup() {
  createCanvas(400, 400, WEBGL);
  angle = 0.0;
}

function draw() {
  background(220);
  let dx = mouseX - 200;
  let dy = mouseY - 200;
  let vec = createVector(-dx, -dy, 0);
  vec.normalize();

  directionalLight(0, 0, 255, vec);
  rectMode(CENTER);
  rotateX(0.03 * angle);
  rotateY(0.02 * angle);
  fill(255, 255, 255);
  sphere(50, 50);

  translate(25, 25);
  sphere(50, 50);

  angle += 1;
}