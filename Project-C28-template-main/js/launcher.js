class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
       this.pointB=pointB
       this.bodyA=bodyA
  
        this.sling= Constraint.create(options)
        World.add(world,this.sling)

    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        var pointB= this.pointB
        var bodyA= this.bodyA.position
        strokeWeight (2);
        line (bodyA.x,bodyA.y,pointB.x,pointB.y)
    }

  }
}