class CardStatGameObject extends GameObject{
    constructor(text){
        super("CardStatGameObject")
        this.addComponent(new TextLabel(), {
            text: text,
            font: "bold 120px Impact",
            fillStyle: "white",
            textAlign: "center"

        })
    }
}