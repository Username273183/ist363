const saveImageBtn = document.getElementById("saveImageBtn");

// 'event name', callback function
saveImageBtn.addEventListener("click", function(){
  saveCanvas("myCanvas", "png");
});

const canvas = {
  width: 800,
  height: 800,
};
const totalCircles = 100;
const minDiameter = 10;
const maxDiameter = 100;
const circles = [];

function setup() {
  createCanvas(canvas.width, canvas.height);
  background(0);
  for (let i = 0; i < totalCircles; i++) {
    const circleSettings = {
      x: random(1, canvas.width),
      y: random(1, canvas.height),
      diameter: random(minDiameter, maxDiameter),
    };
    const myCircle = new Circle(
      circleSettings.x,
      circleSettings.y,
      circleSettings.diameter
    );
    circles.push(myCircle);
  }
}
function draw() {
    background(0);
  // noLoop(); // turn off default looping
  noStroke(); // turn off stroke
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].draw();
  }
}
