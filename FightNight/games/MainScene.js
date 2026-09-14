
//main starting scene
class MainScene extends Scene{
    constructor(){
        super()
        //spawn player one at 250,250
        this.instantiate(new PlayerOne(), new Vector2(250, 250))
        //spawn player two at 1000,250
        this.instantiate(new PlayerTwo(), new Vector2(1000, 250))
    }
}