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

      let size = map(r, 0, 255, gridSize, 2);

      stroke(255, 0, 0);
      strokeWeight(2);
      line(x, y, x + size, y);

      let redColor = color(255, 0, 0);
      redColor.setAlpha(map(r, 0, 255, 0, 255));
      fill(redColor);
      noStroke();
      ellipse(x + size, y, size, size);
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

//참고코드
// 유투브 채널 Jeff Thompson의 CP2: Reading Video Pixels – Webcam Tracking in p5.js 영상을 참고한 코드입니다.
// https://www.youtube.com/watch?v=VYg-YdGpW1o

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   video = createCapture(VIDEO);
//   video.size(width, height);
//   video.hide();
// }

// function draw() {
//   background(255);

//   let gridSize = int(map(mouseX, 0, width, 15, 50));

//   video.loadPixels();
//   for (let y = 0; y < video.height; y += gridSize) {
//     for (let x = 0; x < video.width; x += gridSize) {
//       let index = (y * video.width + x) * 4;
//       let r = video.pixels[index];

//       let dia = map(r, 0, 255, gridSize, 2);

//       fill(0);
//       noStroke();
//       circle(x + gridSize / 2, y + gridSize / 2, dia);
//     }
//   }
// }
