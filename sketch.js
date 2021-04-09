var bgImg,bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    mouseImg1=loadImage("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadImage("images/mouse4.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg3=loadImage("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,1000,800);
    bg.addAnimation("background",bgImg);   
    cat=createSprite(700,650,10,10);
    cat.scale=0.12;
    cat.addAnimation("catImage",catImg1);
    mouse=createSprite(200,650,10,10);
    mouse.addAnimation("mouseImage",mouseImg1);
    mouse.scale=0.1;
}

function draw() {

    background(255);

  
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (mouse.width/2 + cat.width/2)
        && mouse.x - cat.x < (mouse.width/2 + cat.width/2)
        && cat.y - mouse.y < (mouse.height/2 + cat.height/2)
        && mouse.y - cat.y < (mouse.height/2 + cat.height/2)) {
        cat.addAnimation("catFinal",catImg3);
        cat.changeAnimation("catFinal");
        mouse.addAnimation("mouseFinal",mouseImg3);
        mouse.changeAnimation("mouseFinal");
        cat.velocityY=0;
        cat.velocityX=0;
    }else{
        cat.addAnimation("catFirst",catImg1);
        cat.changeAnimation("catFirst");
        mouse.addAnimation("mouseFirst",mouseImg1);
        mouse.changeAnimation("mouseFirst");  
        keyPressed();
    }

    
   drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.velocityX=-2;
      mouse.addAnimation("mouse2",mouseImg2);
      mouse.changeAnimation("mouse2");
  }
  if(keyCode === RIGHT_ARROW){
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.velocityX=2;
      mouse.addAnimation("mouse2",mouseImg2);
      mouse.changeAnimation("mouse2");
}
  if(keyCode === UP_ARROW){
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.velocityY=-2;
      mouse.addAnimation("mouse2",mouseImg2);
      mouse.changeAnimation("mouse2");
  }
  if(keyCode === DOWN_ARROW){
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.velocityY=2;
      mouse.addAnimation("mouse2",mouseImg2);
      mouse.changeAnimation("mouse2");
  }

}
