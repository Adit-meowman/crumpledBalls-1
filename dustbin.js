class dustbin{
    constructor(){
        var options = {
            isStatic:true
        }
        
        this.height = 100;
        this.lBody = Bodies.rectangle(550,650,30,100,options);
        this.rBody = Bodies.rectangle(700,650,30,100,options);
        this.bBody = Bodies.rectangle(625,685,150,30,options);
        this.thickness = 30;
        this.baseWidth = 180;
      World.add(world,this.lBody);
      World.add(world,this.rBody);
      World.add(world,this.bBody);
    }
    display(){

        var lPos = this.lBody.position;
        var rPos = this.rBody.position;
        var bPos = this.bBody.position

        push();
        translate(lPos.x, lPos.y);
        rectMode(CENTER);
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(rPos.x, rPos.y);
        rectMode(CENTER);
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(bPos.x, bPos.y);
        rectMode(CENTER);
        rect(0,0,this.baseWidth,this.thickness);
        pop();

    }
}