class Bob {
  constructor(x, y) {
    var options = {
        'restitution':1,
        'friction':0,
        'density':0.8
    }
    this.body = Bodies.circle(x, y, 15, options);
    this.width = 15;
    this.height = 15;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle =this.body.angle;
    push ();
    translate (pos.x, pos.y);
    rotate (angle);
    fill ("black");
    ellipseMode(CENTER);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
