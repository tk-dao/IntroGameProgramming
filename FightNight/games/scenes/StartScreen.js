class StartScreen extends Scene{
    constructor(){
        super()
        this.instantiate(new StartScreenGameObject(), new Vector2(3000, 1800))
        this.instantiate(new TitleTextGameObject(), new Vector2(3000, 1000))
    }
}