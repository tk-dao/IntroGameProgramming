class GenericLevel extends Scene{
    constructor(){
        super()
        let playerGameObject = this.instantiate(new PlayerGameObject(), new Vector2(0, 300))
        this.instantiate(new PointsGameObject(), new Vector2(50, 200))

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(200, 200))

        helperGameObject.transform.setParent(playerGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillStyle: "gray", font: "120px Impact"})
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(50, 400))


        let wrappedText = new GameObject("WrappedText", [], "UI")
        wrappedText.addComponent(new MultiLineText(), {text: "lol lol lol lol lol lol lol lol lol lol lol lo lo lol lo lol lol lol lol lol oolo lol lo llo lol l o lol ol ol olol o lol ol ol olo lol ol oo lo lol ol ol oll lol lol lol lol lol ", font: "150px Times"})
        this.instantiate(wrappedText, new Vector2(50, 600))
    }
}