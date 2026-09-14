
//main player object
class MainGameObject extends GameObject{
    constructor(){
        super()
        //
        this.addComponent(new UpdateComponent())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"blue", points:[
            new Vector2(-100, -100),
            new Vector2(100, -100),
            new Vector2(0, 100),
            new Vector2(200, 100),
            new Vector2(-150, 400),
            new Vector2(-50, 150),
            new Vector2(-200, 150)
        ]})
    }
}