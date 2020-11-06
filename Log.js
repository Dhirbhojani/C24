class Log {
    //create a oject out of this class
    constructor(newx, newy,newheight, newangle){
      
        //JSON FORMAT
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      //properties 
      this.body = Bodies.rectangle(newx, newy, 20, newheight, options);
      this.width = 20;
      this.height = newheight;
      Matter.Body.setAngle(this.body,newangle)
        
      World.add(world, this.body);
    }
    
    
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
  
    }
    
  
  
  
  
  
  
  }                  