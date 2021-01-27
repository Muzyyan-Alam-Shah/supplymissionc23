class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8
}  
     
this.box=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.box);
this.w=width;
this.h=height;
    }
display(){
    rectMode(CENTER);
    rect(this.box.position.x,this.box.position.y,this.w,this.h);
}

}