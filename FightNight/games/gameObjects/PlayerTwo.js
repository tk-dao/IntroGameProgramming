
//main player object
class PlayerTwo extends GameObject{
    constructor(){
        super("PlayerTwo")
        this.p2Data = CharacterData.characters[Settings.p2Character]
        //Moves player 2
        this.addComponent(new P2Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle: this.p2Data.fillStyle, points: this.p2Data.shape})
        this.addComponent(new Health(), {health: this.p2Data.health})
    }
}   