class ground{
	constructor(){
		var options={
			isStatic:true
		}
		this.body=Bodies.rectangle(750,570,1700,80,options)
		this.w=1700
		this.h=80
		World.add(world,this.body)

	}

	display(){

		push ()
		rectMode (CENTER)
		fill (150,75,0)
		rect(this.body.position.x,this.body.position.y,this.w,this.h)
		pop ()
		

	}
}

	
