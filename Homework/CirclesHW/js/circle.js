class Circle {
    constructor(x, y, diameter, speed) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isGrowing = true;
        this.isRising = true;
        this.color = null;
        this.colorFrom = color(0, 83, 156); 
        this.colorTo = color(238, 164, 127); 
        this.lerpAmount = 0;
    }
    draw() {
        fill(this.color)
        circle(this.x, this.y, this.diameter);
    }
    update(){

        //initial value, min, max. outputMin, outputMax
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0,1); // .45
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        // move the circle
        if(this.isRising){
            this.y -= 1;
        }else{
            this.y *= 1.05;
        }
        this.y -= 1;
        
         // if the circle is growing, increase the diameter by .5
         if (this.isGrowing) {
            this.diameter += .5;
        } else {
            // otherwise, decrease the diameter by .5
            this.diameter -= .5;
        }
        if (this.diameter > maxDiameter) {
            this.isGrowing = false;
        } 

        // if the diameter is less than the minDiameter, start growing
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
        if(this.y <= (this.diameter/2)){
            this.isRising = false;
        }
        if(this.y >= (canvas.height - this.diameter/2)){
            this.isRising = true;
        }
        // Randomly goes from left to right on the x axis
        this.x += random(-2, 2);
    }
}