class tree{
	constructor(){
		var options={
			isStatic:true
		}
		this.body=Bodies.rectangle(990,260,600,570,options)
		this.w=600
		this.h=570
		World.add(world,this.body)

		this.image=loadImage("images/tree.png")
		

	}
	display(){
		push ()
		translate (this.body.position.x,this.body.position.y)
		rotate (this.body.angle)
		imageMode(CENTER)
		image (this.image,0,0,this.w,this.h)
		//rectMode(CENTER)
		//rect(this.body.position.x,this.body.position.y,this.w,this.h)
		pop ()
			
			
	}

}