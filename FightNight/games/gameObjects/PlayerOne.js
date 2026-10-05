
//main player object
class PlayerOne extends GameObject{
    constructor(){
        super("PlayerOne", ["Player"])
        this.p1Data = CharacterData.characters[Settings.p1Character]
        //Moves Player one
        this.addComponent(new P1Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle: this.p1Data.fillStyle, points: this.p1Data.shape})
        this.addComponent(new Health(), {health: this.p1Data.health})
    }
}