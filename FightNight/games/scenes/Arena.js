
//main starting scene
class Arena extends Scene{
    constructor(){
        super("transparent")

        this.gameObjects[0].transform.position = new Vector2(Engine.width / 2, Engine.height / 2)

        this.instantiate(new Stage(), new Vector2(3000, 1500))

        let playerOne = this.instantiate(new PlayerOne(), new Vector2(2000, 1400))
        let playerTwo = this.instantiate(new PlayerTwo(), new Vector2(4000, 1400))

        this.equip(playerOne, CharacterData.p1) 
        this.equip (playerTwo, CharacterData.p2)

        this.makePortrait(CharacterData.p1, new Vector2(400, Engine.height - 300))
        this.makePortrait(CharacterData.p2, new Vector2(5600, Engine.height - 300))

        this.makeHealthBar(playerOne, new Vector2(650, Engine.height - 300))
        let p2Bar = this.makeHealthBar(playerTwo, new Vector2(5350, Engine.height - 300))
        p2Bar.transform.scale = new Vector2(-1, 1)

    }

    equip(player, data){
        for(const item of data.equipment){
            let weapon = this.instantiate(new WeaponGameObject(item, data.fillStyle), item.offset.clone())
            weapon.transform.setParent(player.transform)
        }
    }

    makePortrait(data, position){
        let portrait = new GameObject("Portrait", [], "UI")
        portrait.addComponent(new Circle(), {radius: 200, fillStyle: "rgb(40, 40, 40)"})
        this.instantiate(portrait, position)

        let icon = new GameObject("PortraitIcon", [], "UI")
        icon.addComponent(new Polygon(), {fillStyle: data.fillStyle, points: data.shape})
        this.instantiate(icon, new Vector2(0, 0))
        icon.transform.scale = new Vector2(0.8, 0.8)
        icon.transform.setParent(portrait.transform)
    }

    makeHealthBar(player, position){
        let bar = new GameObject("HealthBar", [], "UI")
        bar.addComponent(new HealthBar(), {character: player})
        this.instantiate(bar, position)
        return bar
    }
}