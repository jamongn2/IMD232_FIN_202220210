let particleRadius;
let video;
let textX = 0;

function setup() {
  setCanvasContainer('canvas', 3, 4, true);

  font = 'Montserrat';

  particleRadius = min(width, height) * 0.02;

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(255);

  let gridSize = 15;

  video.loadPixels();
  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];

      let size2 = map(r, 0, 255, gridSize, 2);

      stroke(255, 0, 0);
      strokeWeight(2);
      line(x, y, x + size, y);

      let redColor = color(255, 0, 0);
      redColor.setAlpha(map(r, 0, 255, 0, 255));
      fill(redColor);
      noStroke();
      ellipse(x + size2, y, size2, size2);
    }
  }

  fill(255);
  textSize(200);
  stroke(150, 0, 0);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 5);
  text('POINT __', 0, 0);
  translate(width / 6, height / 2);
  text('__FACE', 1, 0);
}
