
//main starting scene
class Level01 extends Scene{
    constructor(){
        super()
        //spawn main game object at 250,250
        
        this.instantiate(new EnemyGameObject(), new Vector2(0, -500), Math.PI)
        
        this.instantiate(new LevelControllerGameObject())
    }
}