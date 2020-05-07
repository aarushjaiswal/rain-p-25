var drops;
var rain=[];


function setup() {
  createCanvas(1500,800);
  for (var i = 0;i<800;i++){
    drops = new Rain(random(0,1500),0);
    rain.push(drops);
  }
}

function draw() {
  background(255,255,255);
  for (var i = 0;i<800;i++){
    rain[i].display()
    rain[i].fall()
  }
}