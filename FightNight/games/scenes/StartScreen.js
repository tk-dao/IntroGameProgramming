class StartScreen extends Scene{
    constructor(){
        super("transparent")

        let camera = this.gameObjects[0]
        camera.transform.position = new Vector2(3000, 1700)
        let zoom = 6000 / window.innerWidth
        camera.transform.scale = new Vector2(zoom, zoom)
        this.instantiate(new StartScreenGameObject(), new Vector2(3000, 1800))
        this.instantiate(new TitleTextGameObject(), new Vector2(3000, 1000))
    }
}