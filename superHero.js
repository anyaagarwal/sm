class SUperHEro {
    constructor(x,y,width,height,angle){
        var options={
          frictionAir:0.005,
          density:1
        }
   
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("sh.png");
        World.add(world,this.body);
     }  
   
     display(){
       var  angle=this.body.angle;
       var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("blue");
        strokeWeight(4);
        fill("red");
        image(this.image,0,0,this.width,this.height);
      
       pop();
   
     }
   
   
}
