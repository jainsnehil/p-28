class stone{
	constructor(){
		var options={
			'isStatic':false,
			'density':1,
			'friction':1,
			'restitution':0
		}
		this.body=Bodies.rectangle(240,400,50,50,options)
		this.w=50
		this.h=50
	//	this.r=r
		World.add(world,this.body)

		this.image=loadImage("images/stone.png")
		
	}
	display(){
		//this.body.position.x=mouseX
		//this.body.position.y=mouseY
		push ()
		translate (this.body.position.x,this.body.position.y)
		rotate (this.body.angle)
		//rectMode(CENTER)
		//rect(this.body.position.x,this.body.position.y,this.w,this.h)
		imageMode (CENTER)
		image (this.image,0,0,50,50)
		pop ()
			
	}

}