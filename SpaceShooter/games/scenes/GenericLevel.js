class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(3000, 2500))
        this.instantiate(new PointsGameObject(), new Vector2(50, 100))
    }
}