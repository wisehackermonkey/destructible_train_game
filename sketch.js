// For it to run you need a local server (check: https://github.com/processing/p5.js/wiki/Local-server)

function setup() {
  // put setup code here
  createCanvas(400, 400);
}
var hit = false;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    circle(mouseX, mouseY, 100);
    point(200, 200);

    hit = collidePointCircle(200, 200, mouseX, mouseY, 100);

    // Use vectors as input:
    // const mouse  = createVector(mouseX, mouseY);
    // const circle = createVector(200, 200);
    // const diam   = 100;
    // hit = collidePointCircleVector(mouse, circle, diam);

    stroke(hit ? color('red') : 0);
    print('colliding?', hit);
}