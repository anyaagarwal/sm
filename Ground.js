class Ground {
  constructor(x,y,width,height){
     var options={
       isStatic:true
     }
     
     this.width=width;
     this.height=height;
     this.image=loadImage("bg.webp");
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
  }  

  display(){
    rectMode(CENTER);
    var pos=this.body.position;
    image(this.image,pos.x,pos.y,this.width,this.height);
    fill("brown");

  }


};