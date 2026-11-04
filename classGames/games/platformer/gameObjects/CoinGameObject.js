class CoinGameObject extends GameObject{
    constructor(){
        super("CoinGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: "yellow", points: Assets.square})
        this.addComponent(new Collider(), {isTrigger: true})
        this.transform.scale = new Vector2(10, 10)
    }
}