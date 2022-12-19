const fireworks = [];
let gravity;
let bg;
let canvas;

function setup() {
  bg = loadImage('awan.jpg');
  canvas = createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.12);
  stroke(255);
  strokeWeight(15);
  background(0);
}


function draw() {
  colorMode(RGB);
  background(bg, 0, 0, 25);
  
  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }
for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
