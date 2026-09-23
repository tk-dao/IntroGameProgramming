
//main player object
class PlayerTwo extends GameObject{
    constructor(){
        super("PlayerTwo")
        //
        this.addComponent(new P2Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"rgb(11, 185, 72)", points: Assets.bow})
    }
}