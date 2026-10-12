class TitleTextGameObject extends GameObject{
    constructor(){
        super("TitleTextGameObject")
        this.addComponent(new TextLabel(), {
            text: "FIGHT NIGHT",
            font: "bold 420px Impact",
            fillStyle: "rgb(255, 0, 0)",
            textAlign: "center",
            letterSpacing: "100px"
        })
    }
}