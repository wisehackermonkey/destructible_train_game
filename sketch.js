// destructible train game
// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20201004
import _ from 'lodash';

function setup() {
  // put setup code here
  createCanvas(400, 400);
}
var hit = false;
let hits = [false, false];
let terran;

let m = false;
let m_render = true
let show_points = [true, true];

let points = []
let circle

function setup() {
  createCanvas(400, 400);
  noSmooth();


  points.push(createVector(200, 200))
  points.push(createVector(300, 200))

}

function draw() {
  background(255);

  const Point = createVector(200, 300);

  circle = createVector(mouseX, mouseY);

  // hit = check_point_circle(Point, circle);


  // if (hit) {
  //   m_render = false
  // }

  show_points = check_points(points, circle)
  render_points(points, show_points)
  ellipse(circle.x, circle.y, 100, 100);
  // stroke(hits.some((num) => (num > 0) === true) ? color('red') : 0);

  print('colliding?', hit, m);

}
let check_points = (_points, _circle) => {
  // let hits = []
  for (let i = 0; i < _points.length; i++) {
    let _point = _points[i];
    let _hit = check_point_circle(_point, _circle);
    if (_hit) {
      hits[i] = true
    }
  }
  return hits
}
let check_point_circle = (_point, circle, diam = 100) => {
  return collidePointCircleVector(_point, circle, diam);
}


let render_points = (_points, _show_points) => {
  push()
  rectMode(CENTER);
  for (let i = 0; i < _points.length; i++) {
    if (_show_points[i] ==false) {
      stroke(hits[i] ? color('red') : 0);

      rect(_points[i].x, _points[i].y, 100, 100)
      point(_points[i].x, _points[i].y);
    }
  }
  pop()
}