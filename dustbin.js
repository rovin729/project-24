class dustbin{
    constructor(dustbinx){
        var box1 = Bodies.rectangle(dustbinx, 630, 200, 20,{isStatic:true});
	    World.add(world, box1);

	    var box2 = Bodies.rectangle(dustbinx-82, 575, 20, 100,{isStatic:true});
	    World.add(world, box2);

	    var box3 = Bodies.rectangle(dustbinx+82, 575, 20, 100,{isStatic:true});
	    World.add(world, box3);
    }
    display(dustbinx){
        rect(dustbinx,630,200,20);
        rect(dustbinx-82,575,20,100);
        rect(dustbinx+82,575,20,100);
    }
}