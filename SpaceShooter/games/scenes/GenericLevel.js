class GenericLevel extends Scene{
    constructor(){
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(0, 300))
        this.instantiate(new PointsGameObject(), new Vector2(50, 200))

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(200, 200))

        helperGameObject.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillStyle: "gray", font: "120px Impact"})
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(50, 400))
    }
}