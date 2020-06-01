const particles = [];
let img = []
let on = false

function preload() {
  img[1] = loadImage("ying.jpg")
  img[2] = loadImage("flower.jpg")
}

//参考：https://github.com/ms-online/ms-particles/blob/lesson-1/main.js
function setup() {
  createCanvas(720, 458);
  const particlesLength = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }

}

function draw() {

  image(img[1], 0, 0)
 
  if (on) {
   
    particles.forEach((p, index) => {
      p.update();
      p.draw();
      p.checkParticles(particles.slice(index));
    });    
}
else{
  particles.forEach((p, index) => {
    p.update();
    p.draw1();
   
    p.checkParticles(particles.slice(index));
  });
}
}

class Particle {
  constructor() {
   
    this.pos = createVector(random(width), random(height));
    
    this.vel = createVector(random(-2, 2), random(-2, 2));
    
    this.size = 7;
  }

  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  draw() {
    noStroke();
    fill(238, 221, 180);
    image(img[2], this.pos.x, this.pos.y, 20, 20);
  

  }
  draw1() {
    noStroke();
    fill(238, 221, 180);
    ellipse(this.pos.x, this.pos.y,this.size)
  

  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1; 
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1; 
    }
  }

  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

    });
  }

}
function mousePressed() {
  on=!on
}




