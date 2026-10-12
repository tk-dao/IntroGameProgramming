class CardNameGameObject extends GameObject{
    constructor(index){
        super("CardNameGameObject")
        this.addComponent(new TextLabel(), {
            text: CharacterData.characters[index].name,
            font: "bold 180px Impact",
            fillStyle: "white",
            textAlign: "center"
        })
    }
}