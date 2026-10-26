class CharacterData{
    static characters = [
        {name: "WARRIOR", shape: Assets.square, hitbox: Assets.square, fillStyle: "rgb(220, 17, 17)", health: 100, damage: 5, speed: 30, range: 1, equipment: [Equipment.sword, Equipment.shield], abilities: [{icon: Assets.sword}, {icon: Assets.shield}]},
        {name: "RANGER", shape: Assets.triangle, hitbox: Assets.triangle, fillStyle: "rgb(11, 185, 72)", health: 80, damage: 5, speed: 35, range: 5, equipment: [Equipment.bow, Equipment.buckler], abilities: [{icon: Assets.bow}, {icon: Assets.buckler}]},
        {name: "MAGE", shape: Assets.wizard, hitbox: Assets.square, fillStyle: "rgb(1, 87, 235)", health: 70, damage: 7, speed: 40, range: 3, equipment: [Equipment.staff], abilities: [{icon: Assets.missile}, {icon: Assets.fireball}]}
    ]

    static CardXCoords = [1500, 3000, 4500]
    static CardY = 1900
    static CardWidth = 1200
    static CardHeight = 2000


    // in CharacterData
    static get p1(){ return CharacterData.characters[Settings.p1Character] }
    static get p2(){ return CharacterData.characters[Settings.p2Character] }
}