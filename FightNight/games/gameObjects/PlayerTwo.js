
//main player object
class PlayerTwo extends GameObject{
    constructor(){
        super("PlayerTwo", ["Player"])
        this.p2Data = CharacterData.characters[Settings.p2Character]
        //Moves player 2
        this.addComponent(new P2Update())
        //shape of player object
        this.addComponent(new Polygon(), {fillStyle: this.p2Data.fillStyle, points: this.p2Data.shape})
        this.addComponent(new Collider(), {points: this.p2Data.hitbox})
        this.addComponent(new Health(), {health: this.p2Data.health})
        this.addComponent(new SkillController(), {data: this.p2Data, keys: ["BracketRight", "Backslash"]})
        this.addComponent(new RigidBody(), {gravity: 7200})
    }
}   