const ParticleSize = 12;
const MaxForce = 10;
const MinForce = 0;

let imgUrl = 'src/w13/img/face22.jpg';
let img;
let particles = [];
let particleRadius;

let mVec;
let pg;
let font;
let wave;

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  setCanvasContainer('canvas', 3, 4, true);
  particleRadius = min(width, height) * 0.02;
  mVec = createVector();

  disParticles();

  font = 'Montserrat';
  pg = createGraphics(1200, 200, P2D);
}

function draw() {
  background(225);

  mVec.set(mouseX, mouseY);

  particles.forEach((particle) => {
    particle.seek(mVec);
    particle.update();
    particle.draw();
  });

  fill(0);
  textSize(150);
  textAlign(CENTER, CENTER);

  text('Flow face', 320, 1100);
  textSize(30);
  text('Move your mouse and see the transition', 290, 1150);

  pg.background(0);
  pg.fill(255);
  pg.stroke(255);
  pg.textFont(font);
  pg.textSize(200);

  let txt = 'lowing facial expression';
  let textWidth = pg.textWidth(txt);

  let wave2 = map(
    tan(radians(frameCount)),
    -1,
    3,
    -textWidth / 2,
    textWidth / 2
  );

  pg.push();
  pg.translate(width / 2 + wave2, height / 2 - 500);
  pg.textAlign(CENTER, CENTER);
  pg.text('FLOWING EXPRESSION', 0, 0);
  pg.pop();

  image(pg, 0, 0);
}

function disParticles() {
  const dis = particleRadius * 0.7;
  for (let i = 0; i < height; i += dis) {
    for (let j = 0; j < width; j += dis) {
      let x = (j / width) * img.width;
      let y = (i / height) * img.height;
      const color = img.get(x, y);
      particles.push(new Particle(j, i, 1, color));
    }
  }
}
