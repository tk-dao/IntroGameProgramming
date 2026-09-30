class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(0, 300))
        this.instantiate(new PointsGameObject(), new Vector2(50, 200))
        Camera.main.backgroundColor = "rgb(224, 93, 222)"
    }
}