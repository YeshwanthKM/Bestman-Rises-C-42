class Rain {

    constructor(x,y){

        var options = {

            restitution: 0.1,
            friction: 0.1,
            frictionAir: 0.01
        }

        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        
    World.add(world,this.rain);

    }

    display(){
        var position = this.rain.position;
        push();
        translate(position.x,position.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:Math.round(random(10,391)),y:Math.round(random(10,391))})

        }
    }
}