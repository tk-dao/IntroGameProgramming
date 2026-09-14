
//main starting scene
class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new Stage(), new Vector2(3000, 1500))
        //spawn player one at 250,250
        this.instantiate(new PlayerOne(), new Vector2(2000, 1400))
        //spawn player two at 1000,250
        this.instantiate(new PlayerTwo(), new Vector2(4000, 1400))
    }
}