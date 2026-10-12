class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"0 points", font: "120px Impact"})
        this.addComponent(new PointsController())
    }
}