class CharacterSelectScreen extends Scene{
    constructor(){
        super()
        this.instantiate(new CharacterSelectScreenGameObject(), new Vector2(3000, 1800))
        this.instantiate(new CTitleTextGameObject(), new Vector2(3000, 500))
    }
}