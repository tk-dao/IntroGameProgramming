class CharacterData{
    static characters = [
        {name: "WARRIOR", 
        shape: Assets.square,
        hitbox: Assets.square,
        fillStyle: "rgb(220, 17, 17)",
        health: 100, speed: 30, description: "A tough frontliner who hits the hardest, but only up close. Big, slow swings. Raise the shield to walk through enemy fire.",
        equipment: [Equipment.sword, Equipment.shield],
        abilities: [
            {icon: Assets.sword, shape: Assets.slash, damage: 5, attackSpeed: 0.5, lifetime: 0.15, offset: 150,
                hitbox: [
                    new Vector2(0, -122),
                    new Vector2(90, -122),
                    new Vector2(90, 122),
                    new Vector2(0, 122),
                ]},
            {icon: Assets.shield, block: true, cooldown: 3, duration: 1}
        ]},

        {name: "RANGER",
        shape: Assets.triangle,
        hitbox: Assets.triangle,
        fillStyle: "rgb(11, 185, 72)",
        health: 80, speed: 35, description: "Keeps their distance and chips away with rapid arrows. Low damage per shot, but never stops firing. A quick buckler block saves them in a pinch.",
        equipment: [Equipment.bow, Equipment.buckler],
        abilities: [
            {icon: Assets.arrow, shape: Assets.arrow, damage: 3, attackSpeed: 0.3, speed: 60, range: 1700, offset: 150, scale: 2.5,
                hitbox: [
                    new Vector2(-40, -6),
                    new Vector2(50, -6),
                    new Vector2(50, 6),
                    new Vector2(-40, 6),
                ]
            }, {icon: Assets.buckler, block: true, cooldown: 3, duration: 0.5}
        ]},

        {name: "MAGE",
        shape: Assets.wizard,
        hitbox: Assets.square,
        fillStyle: "rgb(1, 87, 235)",
        health: 70, speed: 35, description: "Slow and fragile, but controls the arena. Pelts enemies with magic missiles, then lobs a fireball that blasts them right off the stage.",
        equipment: [Equipment.staff],
        abilities: [
            {icon: Assets.missile, shape: Assets.missile, damage: 3, attackSpeed: 0.45, speed: 60, range: 1300, offset: 150, scale: 2.5,},
            {icon: Assets.fireball, shape: Assets.fireball, damage: 10, speed: 30, range: 1000, offset: 180, scale: 2.5, knockback: 2500, explosionRadius: 400, gravity: 1500,
            hitbox: [
                new Vector2(-20, -32),
                new Vector2(54, -32),
                new Vector2(54, 32),
                new Vector2(-20, 32),
            ],
            cooldown: 3
        }]}
    ]

    static CardXCoords = [1500, 3000, 4500]
    static CardY = 1900
    static CardWidth = 1200
    static CardHeight = 2000


    // in CharacterData
    static get p1(){ return CharacterData.characters[Settings.p1Character] }
    static get p2(){ return CharacterData.characters[Settings.p2Character] }
}