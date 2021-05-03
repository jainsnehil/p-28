class mango{
	constructor(x,y,r){
		var options={
			isStatic:true,
			restitution:0,
			density:0.9,
			friction:1
		}
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(x,y,r,options)
		this.r=r
	    World.add(world,this.body)

	
    }
	display(){
		push ()
		translate (this.body.position.x,this.body.position.y)
		rotate (this.body.angle)
		imageMode(CENTER)
		image(this.image,0,0,this.r,this.r)
		pop ()
	}
}