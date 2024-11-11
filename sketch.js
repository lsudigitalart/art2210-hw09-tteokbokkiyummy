let bunnyImg1;
let bunnyImg2;
let bunnyImg3;
let bunnyImg4;
let backgroundImg;

var bunny1;
var bunny2;
var bunny3;
var bunny4;

function preload () {
    bunnyImg1 = loadImage("grayBunny.png");
    bunnyImg2 = loadImage("orangeBunny.png");
    bunnyImg3 = loadImage("pinkBunny.png");
    bunnyImg4 = loadImage("notaBunny.png");
    backgroundImg= loadImage("waterbackground.png");
}

class Bunny {
  constructor(x, y, width, height, speed, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.img = img;
  }

  display(){
    image(this.img, this.x, this.y, this.width, this.height);
  }

  move(){
     if (this.y > 0) {
      this.y -= this.speed;
    }
    
  }

  interact(){
    if (mouseIsPressed) {
      this.y = height;
      this.speed = random(1, 2);
    }
  }
}

function setup() {
  createCanvas(600, 600);
  background(20);
  frameRate(60);
  console.log('p5.js is working');

  let bunnySpeed = random (1, 2);
  bunny1 = new Bunny(100, 250, 130, 130, random(1,3), bunnyImg1);

  bunnySpeed = random (1, 2);
  bunny2 = new Bunny(200, 200, 130, 130, random(1,3), bunnyImg2);

  bunnySpeed = random (1, 2);
  bunny3 = new Bunny(300, 150, 130, 130, random(1,3), bunnyImg3);

  bunnySpeed = random (2,3);
  bunny4 = new Bunny(400,150,130,130, random(2,4), bunnyImg4);

}

function draw() {
background (backgroundImg);

  bunny1.display();
  bunny1.move();
  bunny1.interact();

  bunny2.display();
  bunny2.move();
  bunny2.interact();

  bunny3.display();
  bunny3.move();
  bunny3.interact();

  bunny4.display();
  bunny4.move();
  bunny4.interact();

}
