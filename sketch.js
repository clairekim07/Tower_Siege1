const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    
   
    ground = new Ground(740,700,350,20);
    platform = new Ground(1185, 500, 250, 20);

    block1 = new Box(620,475,40,50);
    
    block2 = new Box(660,475,40,50);
    block3 = new Box(700,475,40,50);
    block4 = new Box(740,475,40,50);
    block5 = new Box(780,475,40,50);
    block6 = new Box(820,475,40,50);
    block7 = new Box(860,475,40,50);

    //level 2
    block8 = new Box(660,335,40,50);
    block9 = new Box(700,335,40,50);
    block10 = new Box(740,335,40,50);
    block11 = new Box(780,335,40,50);
    block12 = new Box(820,335,40,50);

    //level 3
    block13 = new Box(700,295,40,50);
    block14 = new Box(740,295,40,50);
    block15 = new Box(780,295,40,50);
    
    //top
    block16 = new Box(740,255,40,50);

    //level 1
    block17  = new Box(1100,200,40,50);
    block18 = new Box(1140,200,40,50);
    block19 = new Box(1180,200,40,50);
    block20 = new Box(1220,200,40,50);
    block21 = new Box(1260,200,40,50);

    //level 2
    block22 = new Box(1140,160,40,50);
    block23 = new Box(1180,160,40,50);
    block24 = new Box(1220,160,40,50);

    //top
    block25 = new Box(1180,120,40,50);

    bird = new Bird(300,500);
    polygon = Bodies.circle(50,200,20);

    slingshot = new slingShot(bird.body,{x:300, y:500});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();

    block1.display();
    
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
  
    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}