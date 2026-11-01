class BoxGameObject extends GameObject{
    constructor(){
        super("BoxGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: "orange", points: Assets.triangle})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())

        this.transform.scale = new Vector2(10, 10)
        

    }
}