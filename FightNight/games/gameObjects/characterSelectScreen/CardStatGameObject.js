class CardStatGameObject extends GameObject{
    constructor(text){
        super("CardStatGameObject")
        this.addComponent(new TextLabel(), {
            text: text,
            font: "bold 12px Impact",
            fillStyle: "white",
            textAlign: "center"

        })
    }
}