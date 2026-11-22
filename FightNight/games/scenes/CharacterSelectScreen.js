class CharacterSelectScreen extends Scene{
    constructor(){
        super("transparent")

        this.gameObjects[0].transform.position = new Vector2(Engine.width / 2, Engine.height / 2)
        this.instantiate(new StarsGameObject())

        this.instantiate(new CTitleTextGameObject(), new Vector2(3000, 500))
        this.instantiate(new CEscapeTextGameObject(), new Vector2(5000, 3200))
        
        for(let i = 0; i < 3; i++){
            const cardX = CharacterData.CardXCoords[i]
            const data = CharacterData.characters[i]

            this.instantiate(new CharacterCard(i), new Vector2(cardX, 1900))
            this.instantiate(new CardNameGameObject(i), new Vector2(cardX, 1150))

            this.instantiate(new CharacterIcon(i), new Vector2(cardX, 1650))

            this.instantiate(new CardDescriptionGameObject(data.description), new Vector2(cardX - 500, 2200))
        }
        this.instantiate(new CharacterSelectScreenGameObject(), new Vector2(0, 0))
    }
}