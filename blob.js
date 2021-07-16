// Jim Laderoute
// https://github.com/JimLaderoute/lavalamp
//
// Based on code written by:
// Basile Pesin
// http://vertmo.github.io

// LavaLamp : p5.js implementation

class Blob {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xforce = 0;
    this.yforce = y / height - 0.5;
    this.xspeed = cos(random(2*PI)) * 2.0;
    this.yspeed = y / height - 0.5;
    this.r = random(200, 300);
  }

  update() {
    this.xspeed += this.xforce;
    this.yspeed += this.yforce;

    this.x += this.xspeed;
    this.y += this.yspeed;

    if (this.x > width || this.x < 0) {
      this.xspeed *= -1.0;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed *= 0;
      if (this.y>height) {
        //cool down
        this.y = height;
        this.yforce = -0.01;
      }
      else {
        // heat up
        this.y = 0;
        this.yforce = 0.05;
      }
    }

  }

  show() {
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
