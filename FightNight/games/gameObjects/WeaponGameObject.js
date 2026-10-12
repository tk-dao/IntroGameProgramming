class WeaponGameObject extends GameObject{
    constructor(item, fillStyle){
        super("WeaponGameObject")
        this.addComponent(new Polygon(), {fillStyle: fillStyle, points: item.points})
        this.transform.rotation = item.rotation * Math.PI / 180
    }
}