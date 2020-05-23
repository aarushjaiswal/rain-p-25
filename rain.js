class Rain{
    constructor(x,y){
        this.x=x
        this.y=y
        this.length=random(5,35)
    }

    display(){
        stroke(random(0,20),random(0,180),random(180,255))
        line(this.x, this.y, this.x, this.y+this.length)
    }

    fall(){
        this.y=this.y+random(5,60);
        if(this.y>800){
            this.y=0
        }
    }
}
