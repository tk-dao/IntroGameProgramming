
//main starting scene
class MainScene extends Scene{
    constructor(){
        super()
        //spawn main game object at 250,250
        this.instantiate(new MainGameObject(), new Vector2(250, 250))
    }
}