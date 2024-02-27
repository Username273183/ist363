class Circle {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.isRising = true;
    this.color = null;
    this.colorFrom = color(random(34, 114), random(61, 131), random(91, 171));
    this.colorTo = color(random(93, 133), random(81, 161), random(121, 201));
    this.lerpAmount = 0;
    this.active = true;
  }
  draw() {
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }

  update() {
    this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1);

    if (this.isGrowing) {
      this.diameter += 0.5;
    } else {
      this.diameter -= 0.5;
    }
    if (this.diameter > maxDiameter) {
      this.isGrowing = false;
    }
    if (this.diameter < minDiameter) {
      this.isGrowing = true;
    }
    this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);
    this.y += 3;
    this.x -= random(-1.5, 1.5);

    if (this.y <= this.diameter / 2) {
      this.isRising = false;
    }
    if (this.y >= canvas.height - this.diameter / 2) {
      this.isRising = true;
    }
    if (this.y > height || this.x > width || this.x < 0) {
      this.y = -this.diameter;
      this.x = random(width);
    }
  }
}
