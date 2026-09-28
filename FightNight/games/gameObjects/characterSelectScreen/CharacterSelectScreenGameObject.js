class CharacterSelectScreenGameObject extends GameObject{
    constructor(){
        super("CharacterSelectScreenGameObject", ["Screen"])
        this.addComponent(new TextLabel())
        this.addComponent(new CharacterSelectController())
    }
}