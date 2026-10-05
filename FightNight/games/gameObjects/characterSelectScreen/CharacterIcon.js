class CharacterIcon extends GameObject{
    constructor(index){
        super("CharacterIcon")
        this.addComponent(new Polygon(), {fillStyle: CharacterData.characters[index].fillStyle, points: CharacterData.characters[index].shape})
    }
}