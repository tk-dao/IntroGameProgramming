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
        //outer curve (top to bottom)
        new Vector2(0, -60),
        new Vector2(11, -45),
        new Vector2(19, -30),
        new Vector2(23, -15),
        new Vector2(25, 0),
        new Vector2(23, 15),
        new Vector2(19, 30),
        new Vector2(11, 45),
        new Vector2(0, 60),
        //inner curve (bottom to top)
        new Vector2(7, 45),
        new Vector2(13, 30),
        new Vector2(16, 15),
        new Vector2(17, 0),
        new Vector2(16, -15),
        new Vector2(13, -30),
        new Vector2(7, -45),
    ]

    static bowString = [
        new Vector2(-1, -60),
        new Vector2(1, -60),
        new Vector2(1, 60),
        new Vector2(-1, 60),
    ]

    static arrow = [
        //tip
        new Vector2(50, 0),
        new Vector2(40, -5),
        new Vector2(40, -1),
        //shaft
        new Vector2(-30, -1),
        //fletching
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

    static buckler = []

    static staff = []


    //SPELLS

    
}

