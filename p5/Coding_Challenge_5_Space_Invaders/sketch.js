// sketch.js file
var ship;
var drops =[];
var flowers = [];
function setup() {
  createCanvas(600,400);
  ship = new Ship();
  for(var i = 0; i < 6; i++){
    flowers[i] = new Flower(i*80 + 80,60);
  }
}

function draw() {
  background(50,50,50);
  ship.show();
  for(var i = 0; i < flowers.length; i++){
    
    flowers[i].show();//render all the flowers
  }
  for(var i = 0; i < drops.length; i++){
    
    drops[i].show();//render all the drops
    drops[i].move();//move drop upwards
    
    for(var j = 0; j < flowers.length; j++){
      if(drops[i].hits(flowers[j])){//collision detection between flower and drop
        flowers[j].grow();//growing flower when drop hits it.
        drops[i].destroy();
        console.log("hit");
      }
    }

    if(drops[i].flag){
      drops.splice(i, 1);
    }
  }
}

function keyPressed() {

  if(keyCode === RIGHT_ARROW){
    ship.move(1);
  }else if(keyCode === LEFT_ARROW){
    ship.move(-1);
  }else if(key === ' '){
    var drop = new Drop(ship.x,height);
    drops.push(drop);
  }
  
}