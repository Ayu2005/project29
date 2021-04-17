class Polygon {
    constructor(x, y, radius){
        var options = {
            'restitution':0.04,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
         this.image=loadImage("polygon.png");
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
       
        
   }
   display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red");
    imageMode(CENTER);
    image(this.image,0,0, this.radius, this.radius);
    pop();
   }
  }