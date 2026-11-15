class CardDescriptionGameObject extends GameObject{
    constructor(text){
        super("CardDescriptionGameObject")
        this.addComponent(new MultiLineText(), {
            text: text,
            font: "85px Impact",
            fillStyle: "white",
            maxWidth: 1000
        })
    }
}