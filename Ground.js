class Ground{
    constructor(){

        var options = {
            isStatic : true,
            restitution : 0,
            friction : 0.2,
            density : 0.4,
        }
this.x = 400;
this.y = 680;
this.width = 800;
this.height = 20;
this.groundBody = Bodies.rectangle(400,690,this.width,this.height,options);

World.add(world,this.groundBody)

    }
    display(){
        var groundPos = this.groundBody.position;

        push();
        //translate(groundPos.x,groundPos.y);
        rectMode(CENTER);
        rect(400,690,this.width,this.height);
        pop();

    }
}