class CTitleTextGameObject extends GameObject{
    constructor(){
        super("CTitleTextGameObject")
        this.addComponent(new TextLabel(), {
            text: "SELECT YOUR FIGHTER",
            font: "bold 24px Impact",
            fillStyle: "rgb(255, 255, 255)",
            textAlign: "center",
            letterSpacing: "10px"
        })
    }
}