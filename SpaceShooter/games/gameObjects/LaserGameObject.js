
//actual laser as game object
class LaserGameObject extends GameObject{
    constructor(){
        super("Laser")
        //adds laser controller as component so it can move
        this.addComponent(new LaserController())
        //adds polygon as component so we can change the shape
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.lightning})
        this.transform.scale = new Vector2(.5, .5)

    }
}