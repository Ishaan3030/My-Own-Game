class Base{
    constructor(x, y, w, h){
        let options = {
            isStatic: true
        };

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}