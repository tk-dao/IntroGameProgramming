
//main player object
class PlayerOne extends GameObject{
    constructor(){
        super("PlayerOne")
        //Moves Player one
        this.addComponent(new P1Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"rgb(220, 17, 17)", points: Assets.arrow})
    }
}