class Rain{
    constructor(x,y){
        this.x=x
        this.y=y
        this.length=random(5,35)
    }

    display(){
        stroke('blue')
        line(this.x, this.y, this.x, this.y+this.length)
    }

    fall(){
        this.y=this.y+random(5,60);
        if(this.y>800){
            this.y=0
        }
    }
}
