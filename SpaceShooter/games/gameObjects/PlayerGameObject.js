
//main player object
class PlayerGameObject extends GameObject{
    constructor(){
        super("Player", [], "ships")
        this.addComponent(new UpdateComponent())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.triangle})
        this.addComponent(new Collider(), {points: Assets.triangle})
    }
}