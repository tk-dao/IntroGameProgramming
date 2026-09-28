
//main player object
class PlayerOne extends GameObject{
    constructor(){
        super("PlayerOne", ["Player"])
        //Moves Player one
        this.addComponent(new P1Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle:"rgb(220, 17, 17)", points: Assets.square})
        this.addComponent(new Health(), {health: 100})
    }
}