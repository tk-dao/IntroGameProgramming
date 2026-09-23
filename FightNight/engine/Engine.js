class Engine{
    static canvas
    static ctx
    static currentScene
    static stars = []

    static start(){
        //setup canvas and contex for game
        Engine.canvas = document.querySelector("#canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        //make a listener to keep track when keys get pressed and released
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        //makes a list of random points around the screen for stars (150 times)
        for(let i = 0; i < 150; i++){
            Engine.stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 3 + 1
            })
        }

        SceneManager.currentScene.start()

        requestAnimationFrame(Engine.gameLoop)

    }

    //game loop (loop through as the game plays)
    //game needs to update, draw items on screen, and recall the game loop
    static gameLoop(){
        Engine.update()
        Engine.draw()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update(){
        //call the update in your Scene file
        // update()
        SceneManager.currentScene.update()
    }
    
    static draw(){
        //sets canvas to width and height of screen
        Engine.canvas.width = window.innerWidth;
        Engine.canvas.height = window.innerHeight;

        //adds background
        Engine.ctx.fillStyle = "rgb(0, 0, 0)"
        Engine.ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height)

        //fills the screen with stars
        Engine.ctx.fillStyle = "white"
        for(const star of Engine.stars){
            Engine.ctx.beginPath()
            Engine.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
            Engine.ctx.fill()
        }
        
        //call the draw in your Scene file
        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }

    
}