let canvasWidth = 800;
let canvasHeight = 800;

function setup() {
    // create canvas to draw on
  createCanvas(canvasWidth, canvasHeight);

  //background color
  background(0);
}
function draw(){
    
    noLoop();

    noStroke();

    
    // let circleY = 50;
    let circleDiameter = 50;
    let circleGap = 10;
    let totalCircles= 10;
    let totalRows = 10;

    let startX = (canvasWidth - (circleDiameter*totalCircles) - (circleGap*totalCircles-1))/2;
    let startY = (canvasHeight - (circleDiameter*totalRows) - (circleGap*totalRows-1))/2;

    let circleX = startX;
    let circleY = startY;

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){  
            let randomDiameter = random(20,120);
            let randomRed = random(0,255);
            fill(randomRed,randomRed,randomRed,randomRed);    
            circle(circleX,circleY,randomDiameter);
            circleX += (circleDiameter + circleGap);
        }
        circleX = startX;

        circleY += (circleDiameter + circleGap);
    }
}