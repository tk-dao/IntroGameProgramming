class StarsGameObject extends GameObject{
    constructor(){
        super("StarsGameObject", [], "background")
        this.addComponent(new Stars())
        //this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.triangle})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new StarsGameObjectController)
        //this.transform.scale = new Vector2(1,1)
    }
}
