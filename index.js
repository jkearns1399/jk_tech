let particles = [];
const numParticles = 1000;


function setup(){
    createCanvas(400,400);
    for(let i = 0; i < numParticles; i++){
        particles.push(createVector(random(width),
        random(height)));
    }
    stroke(255);
}

function draw(){
    background(0);
    for(let i = 0; i < numParticles; i++){
        let p = particles[i]; 
        point(p.x,p.y);
      let n = noise(p.x* noiseScale, p.y * noiseScale);
      let a = TAU * n;
      p.x += cos(a);
      p.y += sin(a);
      if(!onScreen(p)){
        p.x = random(width);
        p.y = random(height);
      }
}
}
function onScreen(v){
  return v.x >=0 && v.x <= width && v.y >=0 && v.y <= height;
}