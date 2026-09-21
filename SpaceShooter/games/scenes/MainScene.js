
//main starting scene
class MainScene extends Scene{
    constructor(){
        super()
        //spawn main game object at 250,250
        this.instantiate(new MainGameObject(), new Vector2(3000, 2500))
        this.instantiate(new EnemyGameObject(), new Vector2(3000, 500), Math.PI)
    }
}