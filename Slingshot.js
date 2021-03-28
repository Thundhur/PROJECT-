class Slingshot{
    constructor(BA,BB,s,l) {
      var options = {
          stiffness: s,
          bodyA: BA,
          pointB: BB,
          length: l,
      }
      this.s = Constraint.create(options);
      World.add(world,this.s);
      this.pointB = BB;
      }
      display(){
          
          if(this.s.bodyA){
            var A = this.s.bodyA;
            var B = this.pointB;
            line(A.position.x,A.position.y,B.x,B.y);
        }
          }
     
      fly() {
        this.s.bodyA = null;
    
        
        }
       attach() {
           this.s.bodyA = stone1.body;
}
}
