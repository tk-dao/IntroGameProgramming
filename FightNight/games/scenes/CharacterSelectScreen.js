class CharacterSelectScreen extends Scene{
    constructor(){
        super()
        this.instantiate(new CTitleTextGameObject(), new Vector2(3000, 500))
        
        for(let i = 0; i < 3; i++){
            this.instantiate(new CharacterCard(i), new Vector2(CharacterData.CardXCoords[i], 1900))
            this.instantiate(new CardNameGameObject(i), new Vector2(CharacterData.CardXCoords[i], 1150))
        }
        this.instantiate(new CharacterSelectScreenGameObject(), new Vector2(3000, 1800))
    }
}