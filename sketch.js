// Jim Laderoute
// Lava Lamp
//
// This code started out with MetaBalls by Basile Pesin at http://vertmo.github.io
// I modified it to make it behave more like a lava lamp.
//

var blobs = [];

function setup() {
  let c = createCanvas(200, 400, P2D);
  c.parent("canvas_div");

  //colorMode(HSB);
  for (i = 0; i < 10; i++)
    blobs.push(new Blob(random(0, width), random(0, height)));
}

let gPaused=false;
function isPaused() {
  return gPaused;
}
function mouseClicked() {
  gPaused = !gPaused;
}

function draw() {
  if ( !isPaused()) {
  background(51);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt(xdif * xdif + ydif * ydif);
        sum += (10 * blobs[i].r) / d;
      }
      set(x, y, color(sum, 0, 0));
    }
  }
  updatePixels();

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}
}
