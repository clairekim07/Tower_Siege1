class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //Matter.body.translate();
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("#FEBFCA");
    stroke("#40E0D0"); 
    rect(0, 0, this.width, this.height);
    pop();
    
  }
};
