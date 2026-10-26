class StartScreen extends Scene{
    constructor(){
        super("transparent")

        this.gameObjects[0].transform.position = new Vector2(Engine.width / 2, Engine.height / 2)

        this.instantiate(new StartScreenGameObject(), new Vector2(3000, 1800))
        this.instantiate(new TitleTextGameObject(), new Vector2(3000, 1000))
    }
}