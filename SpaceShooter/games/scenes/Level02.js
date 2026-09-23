
//main starting scene
class Level02 extends Scene{
    constructor(){
        super()
        //spawn main game object at 250,250
        this.instantiate(new EnemyGameObject(), new Vector2(4000, 500), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(2000, 500), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}