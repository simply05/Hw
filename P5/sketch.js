var andy=0;

function setup() {   
   createCanvas(600,400);
  
}

function draw() { 
   background(65, 233, 200 );   
   fill(233, 65, 65 );   
  // to make triangles but i put the background after inorder to only show the lines
  triangle(random(width),random(height),random(width),random(height));
   noStroke();   
   textSize(30);   
   textFont("TIMES NEW ROMAN");   
   textStyle(ITALIC);   
   textAlign(LEFT);   
   text("LOOK AT THIS",andy,350);    
  // variableEllipse is meant to show previouse positon and current how ever due to the backgound
  // it gives off a pulsing effect
   variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  

 // inorder to add a condition must put if and else statement
  if(andy>600){     
     andy = 0;   
  }else{     
     andy=andy + 5;   
  }
  function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
  }  
}