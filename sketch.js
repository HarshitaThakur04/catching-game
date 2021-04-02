var cat1Img,cat2Img,cat3Img,cat4Img;
var gardenImg;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
function preload() {
    //load the images here
    cat1Img=loadImage("cat1.png");
    cat2Img=loadImage("cat2.png");
    cat3Img=loadImage("cat3.png");
    cat4Img=loadImage("cat4.png");
    gardenImg=loadImage("garden.png");
    mouse1Img=loadImage("mouse1.png");
    mouse2Img=loadImage("mouse2.png");
    mouse3Img=loadImage("mouse3.png");
    mouse4Img=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    //write code here to change animation
    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning");
}

function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === Left_Arrow){
mouse.addAnimation("mouseTeasing",mouse2Img);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;
}
if(keyCode === Right_Arrow){
mouse.addAnimation("mouse1Img",mouse1Img);
mouse.changeAnimation("mouseImg");
mouse.frameDelay = 25;

}
}




