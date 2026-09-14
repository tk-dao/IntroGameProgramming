
//main player object
class PlayerTwo extends GameObject{
    constructor(){
        super()
        //
        this.addComponent(new P2Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"blue", points:[
            new Vector2(0, -100),
            new Vector2(-100, 100),
            new Vector2(100, 100)
        ]})
    }
}