class Paper{
    constructor(Paperx,Papery){
       var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(Paperx,Papery,40,options);
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        circle(pos.x,pos.y,20);
    }
}