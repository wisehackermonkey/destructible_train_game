// destructible train game
// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20201004

function setup() {
  // put setup code here
  createCanvas(400, 400);
}
var hit = false;

let terran;

let m = false;
let m_render = true
function setup() {
  createCanvas(400, 400);
  noSmooth();
  terran = createImage(10, 10);

}

function draw() {
  background(255);

  const Point = createVector(200, 200);
  const circle = createVector(mouseX, mouseY);



  // Use vectors as input:
  // const diam = 100;
  hit = check_point_circle(Point, circle);
  if(hit){
    m_render = false
  }
  if(m_render){
    push();
    rectMode(CENTER);
    rect(Point.x, Point.y, 100, 100)
    pop()
  }
  ellipse(circle.x, circle.y, 100, 100);
  point(Point.x, Point.y);
  stroke(hit ? color('red') : 0);
  print('colliding?', hit,m);

}

let check_point_circle = (_point, circle, diam = 100) => {
  return collidePointCircleVector(_point, circle, diam);
}