class Particle {
  constructor(x, y, mass, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.color = color;
    this.targetX = x;
    this.targetY = y;
    this.speedMx = 2;
    this.forceMx = 0.9;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);

    this.acc.mult(0);
  }

  draw() {
    const headingAngle = this.vel.heading();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(headingAngle);
    fill(this.color);
    noStroke();

    beginShape();
    const triangleSize = particleRadius * 2;
    const x1 = 0;
    const y1 = -triangleSize / 2;
    const x2 = triangleSize / 2;
    const y2 = triangleSize / 2;
    const x3 = -triangleSize / 2;
    const y3 = triangleSize / 2;
    triangle(x1, y1, x2, y2, x3, y3);
    endShape(CLOSE);
    noFill();
    pop();
  }
  seek(target) {
    const desiredVel = p5.Vector.sub(target, this.pos);
    desiredVel.setMag(this.speedMx);
    const steer = p5.Vector.sub(desiredVel, this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }
}
