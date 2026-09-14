
//main player object
class PlayerOne extends GameObject{
    constructor(){
        super()
        //Moves Player one
        this.addComponent(new P1Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"blue", points:[
            new Vector2(-100, -100),
            new Vector2(100, -100),
            new Vector2(100, 100),
            new Vector2(-100, 100),
        ]})
    }
}