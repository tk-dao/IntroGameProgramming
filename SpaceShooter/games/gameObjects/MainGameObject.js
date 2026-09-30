
//main player object
class MainGameObject extends GameObject{
    constructor(){
        super("Player", [], "ships")
        this.addComponent(new UpdateComponent())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.triangle})
    }
}