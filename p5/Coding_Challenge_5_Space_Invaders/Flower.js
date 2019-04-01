// Flower.js file
function Flower(x , y){
    this.x = x;
    this.y = y;
    this.r = 30;
    this.show = function(){ 
        fill(0,255,0);
        ellipse(this.x, this.y , this.r*2 ,this.r*2 );
    }
    this.grow = function(){
      this.r = this.r + 5;
    }
}