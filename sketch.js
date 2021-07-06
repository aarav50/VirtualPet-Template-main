var dog,sadDog,happyDog;
var milk
var milk1 =10
var i1
var b
var b1
var b2
var b3
var b4
var b5
var b6
var b7 
var b8
var b8
var b9
var b10
var b11
var b12
function preload(){
  sadDog=loadImage("Images/Dog.png");
  i1=loadImage("Images/Milk.png")
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database()
  createCanvas(1900,600);
  milk=new qq()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  b1=createSprite(100,200)
  b2=createSprite(300,200)
  b3=createSprite(600,200)
  b4=createSprite(900,200)
  b5=createSprite(1200,200)
  b6=createSprite(1500,200)
  b7=createSprite(100,400)
  b8=createSprite(300,400)
  b9=createSprite(600,400)
  b10=createSprite(900,400)
  b11=createSprite(1200,400)
  b12=createSprite(1500,400)
  b1.addImage(i1)
  b1.addImage(i1)
  b2.addImage(i1)
  b3.addImage(i1)
  b4.addImage(i1)
  b5.addImage(i1)
  b6.addImage(i1)
  b7.addImage(i1)
  b8.addImage(i1)
  b9.addImage(i1)
  b10.addImage(i1)
  b11.addImage(i1)
  b12.addImage(i1)
  b1.scale=0.1
  b2.scale=0.1
  b3.scale=0.1
  b4.scale=0.1
  b5.scale=0.1
  b6.scale=0.1
  b7.scale=0.1
  b8.scale=0.1
  b9.scale=0.1
  b10.scale=0.1
  b11.scale=0.1
  b12.scale=0.1


}

function draw() {
  background(46,139,87);
  drawSprites();
  milk.display()

}
