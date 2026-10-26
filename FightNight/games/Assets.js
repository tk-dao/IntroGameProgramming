class Assets {

    //CHARACTERS
    static square = [
                new Vector2(-100, -100),
                new Vector2(100, -100),
                new Vector2(100, 100),
                new Vector2(-100, 100)
            ]

    static triangle = [
            new Vector2(0, -100),
            new Vector2(-100, 100),
            new Vector2(100, 100)
        ]
    
    static wizard = [
        new Vector2(-100, -100),
        new Vector2(100, -100),
        new Vector2(-100, 100),
        new Vector2(100, 100),
    ]


    //EQUIPMENT
    static sword = [
        //blade right
        new Vector2(0, -60),
        new Vector2(10, -50),
        //hilt right
        new Vector2(10, 0),
        new Vector2(20, 0),
        new Vector2(20, 10),
        //handle
        new Vector2(10, 10),
        new Vector2(10, 40),
        new Vector2(-10, 40),
        new Vector2(-10, 10),
        //hilt left
        new Vector2(-20, 10),
        new Vector2(-20, 0),
        new Vector2(-10, 0),
        //blade left
        new Vector2(-10, -50)

    ]

    static shield = [
        new Vector2(-30, -40),
        new Vector2(30, -40),
        new Vector2(30, 0),
        new Vector2(0, 40),
        new Vector2(-30, 0),
    ]

    static bow = [
        //string top, then bow outer curve down
        new Vector2(-1, -60),
        new Vector2(1, -60),
        new Vector2(1, -59),
        new Vector2(11, -45),
        new Vector2(19, -30),
        new Vector2(23, -15),
        new Vector2(25, 0),
        new Vector2(23, 15),
        new Vector2(19, 30),
        new Vector2(11, 45),
        new Vector2(1, 59),
        //string bottom, up to the middle
        new Vector2(1, 60),
        new Vector2(-1, 60),
        new Vector2(-1, 0),
        //cross the string, around the gap
        new Vector2(1, 0),
        new Vector2(1, 58),
        new Vector2(7, 45),
        new Vector2(13, 30),
        new Vector2(16, 15),
        new Vector2(17, 0),
        new Vector2(16, -15),
        new Vector2(13, -30),
        new Vector2(7, -45),
        new Vector2(1, -58),
        //back to the middle and out
        new Vector2(1, 0),
        new Vector2(-1, 0),
    ]

    static arrow = [
        //tip
        new Vector2(50, 0),
        new Vector2(40, -5),
        new Vector2(40, -1),
        //shaft
        new Vector2(-30, -1),
        //feathers
        new Vector2(-35, -6),
        new Vector2(-40, -6),
        new Vector2(-35, 0),
        new Vector2(-40, 6),
        new Vector2(-35, 6),
        new Vector2(-30, 1),
        //back to tip
        new Vector2(40, 1),
        new Vector2(40, 5),
    ]

    static buckler = [
        new Vector2(40, 0),
        new Vector2(39, 10),
        new Vector2(35, 20),
        new Vector2(28, 28),
        new Vector2(20, 35),
        new Vector2(10, 39),
        new Vector2(0, 40),
        new Vector2(-10, 39),
        new Vector2(-20, 35),
        new Vector2(-28, 28),
        new Vector2(-35, 20),
        new Vector2(-39, 10),
        new Vector2(-40, 0),
        new Vector2(-39, -10),
        new Vector2(-35, -20),
        new Vector2(-28, -28),
        new Vector2(-20, -35),
        new Vector2(-10, -39),
        new Vector2(0, -40),
        new Vector2(10, -39),
        new Vector2(20, -35),
        new Vector2(28, -28),
        new Vector2(35, -20),
        new Vector2(39, -10),
    ]

    static staff = [
        //knob
        new Vector2(-3, -61),
        new Vector2(-7, -63),
        new Vector2(-10, -70),
        new Vector2(-7, -77),
        new Vector2(0, -80),
        new Vector2(7, -77),
        new Vector2(10, -70),
        new Vector2(7, -63),
        new Vector2(3, -61),
        //stick
        new Vector2(3, 80),
        new Vector2(-3, 80),
    ]


    //SPELLS
    static missile = [
        new Vector2(75, 0),
        new Vector2(20, 14),
        new Vector2(-75, 0),
        new Vector2(20, -14),
    ]

    
    //fireball: big round head, flames wrapping off the sides (flies right)
    static fireball = [
        //head (top side, around the front, to bottom side)
        new Vector2(19, -32),
        new Vector2(30, -31),
        new Vector2(39, -27),
        new Vector2(47, -20),
        new Vector2(52, -10),
        new Vector2(54, 0),
        new Vector2(52, 10),
        new Vector2(47, 20),
        new Vector2(39, 27),
        new Vector2(30, 31),
        new Vector2(19, 32),
        //bottom flames
        new Vector2(-28, 44),
        new Vector2(1, 25),
        new Vector2(-55, 27),
        new Vector2(-8, 12),
        //center trail
        new Vector2(-80, 0),
        //top flames
        new Vector2(-8, -12),
        new Vector2(-55, -27),
        new Vector2(1, -25),
        new Vector2(-28, -44),
    ]

    
}

