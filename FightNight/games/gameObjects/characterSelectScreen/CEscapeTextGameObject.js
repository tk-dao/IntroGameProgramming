class CEscapeTextGameObject extends GameObject{
    constructor(){
        super("CEscapeTextGameObject")
        this.addComponent(new TextLabel(), {text: "Hit Esc to go back", fillStyle: "white", font: "80px Impact"})
    }
}