class Paper{
 constructor(x,y){
 var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
    this.body = Bodies.circle(x, y, 5, options);
    this.image = loadImage("image/paper.png");
   
    World.add(world, this.body);
 }
 display(){
        var angle = this.body.angle;
        push();
        fill('red');
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();

 }
}