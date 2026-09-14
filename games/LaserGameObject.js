
//actual laser as game object
class LaserGameObject extends GameObject{
    constructor(){
        super()
        //adds laser controller as component so it can move
        this.addComponent(new LaserController())
        //adds polygon as component so we can change the shape
        this.addComponent(new Polygon(), {fillStyle:"red", points:[
            new Vector2(-20, 20),
            new Vector2(20, 20),
            new Vector2(0, -20),
            new Vector2(40, -20),
            new Vector2(-30, -80),
            new Vector2(-10, -30),
            new Vector2(-40, -30)
        ]})

    }
}