class CharacterCard extends GameObject{
    constructor(index){
        super("CharacterCard")
        this.addComponent(new CardRenderer(), {index: index})
        
    }
}