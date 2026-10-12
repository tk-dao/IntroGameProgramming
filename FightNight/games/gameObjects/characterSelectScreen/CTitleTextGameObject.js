class CTitleTextGameObject extends GameObject{
    constructor(){
        super("CTitleTextGameObject")
        this.addComponent(new TextLabel(), {
            text: "SELECT YOUR FIGHTER",
            font: "bold 300px Impact",
            fillStyle: "rgb(255, 255, 255)",
            textAlign: "center",
            letterSpacing: "100px"
        })
    }
}