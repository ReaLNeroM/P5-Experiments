function setup() {
  createCanvas(400, 400, WEBGL);
  angle = 0.0;
  img = loadImage('https://i.ibb.co/HH6YR5H/leila.png');
}

function draw() {
  background(220);
  let dx = mouseX - 200;
  let dy = mouseY - 200;

  rectMode(CENTER);
  rotateX(0.03 * angle);
  rotateY(0.02 * angle);
  fill(255, 255, 255);
  sphere(50, 50);

  translate(25, 25);
  texture(img);
  box(200, 200);

  angle += 1;
}