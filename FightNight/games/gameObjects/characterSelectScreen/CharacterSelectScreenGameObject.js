class CharacterSelectScreenGameObject extends GameObject{
    constructor(){
        super("CharacterSelectScreenGameObject", ["Screen"])
        this.addComponent(new CharacterSelectController())
    }
}