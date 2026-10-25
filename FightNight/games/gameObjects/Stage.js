class Stage extends GameObject{
    constructor(){
        super("Stage")

        this.addComponent(new Polygon(), {fillStyle: "gray", points: [
            new Vector2(-2000, 0),
            new Vector2(2000, 0),
            new Vector2(1000, 1000),
            new Vector2(500, 600),
            new Vector2(0, 1400),
            new Vector2(-500, 600),
            new Vector2(-1000, 1000),
            
        ]})

        this.addComponent(new Collider(), {points: [
            new Vector2(-2000, 0),
            new Vector2(2000, 0),
            new Vector2(2000, 100),
            new Vector2(-2000, 100),
        ]})
    }
}