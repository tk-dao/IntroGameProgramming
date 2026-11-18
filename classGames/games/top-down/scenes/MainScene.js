class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new BoxGameObject(), new Vector2(90,0), 0)


    const uiButton = this.instantiate(new UIButton())
    uiButton.transform.anchorMin = new Vector2(.5, 1)
    uiButton.transform.anchorMax = new Vector2(.5, 1)
    uiButton.transform.offsetUpperLeft = new Vector2(150, -150)
    uiButton.transform.offsetLowerRight = new Vector2(250, -50)
    // uiButton.transform.anchorMin = new Vector2(.9, .9)
    // uiButton.transform.anchorMax = new Vector2(.9, .9)
    // uiButton.transform.offsetUpperLeft = new Vector2(-50, -50)
    // uiButton.transform.offsetLowerRight = new Vector2(50, 50)
  }
}
