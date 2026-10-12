class StartScreenGameObject extends GameObject{
    constructor(){
        super("StartScreenGameObject", ["Screen"])
        this.addComponent(new TextLabel(), {text: "Press Space to Start", fillStyle: "white", textAlign: "center", font: "bold 120px Impact"})
        this.addComponent(new StartController())
    }
}