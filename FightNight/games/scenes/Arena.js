
//main starting scene
class Arena extends Scene{
    constructor(){
        super()
        this.instantiate(new Stage(), new Vector2(3000, 1500))

        let playerOne = this.instantiate(new PlayerOne(), new Vector2(2000, 1400))
        let playerTwo = this.instantiate(new PlayerTwo(), new Vector2(4000, 1400))

        this.equip(playerOne, CharacterData.p1) 
        this.equip (playerTwo, CharacterData.p2)
    }

    equip(player, data){
        for(const item of data.equipment){
            let weapon = this.instantiate(new WeaponGameObject(item, data.fillStyle), item.offset.clone())
            weapon.transform.setParent(player.transform)
        }
    }
}