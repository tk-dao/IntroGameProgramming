class StartScreenGameObject extends GameObject{
    constructor(){
        super("StartScreenGameObject", ["Screen"])
        this.addComponent(new TextLabel(), {text: "Press Space to Start", fillStyle: "white", textAlign: "center"})
        this.addComponent(new StartController())
    }
}