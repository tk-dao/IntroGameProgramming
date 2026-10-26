class Engine{
    static canvas
    static ctx
    static layers = ["default", "UI"]
    static stars = []
    static width = 6000
    static height = 3375

    static start(nextScene, settings){
        //setup canvas and contex for game
        Engine.canvas = document.querySelector("#canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        Engine.canvas.width = Engine.width
        Engine.canvas.height = Engine.height

        //make a listener to keep track when keys get pressed and released
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        //makes a list of random points around the screen for stars (150 times)
        for(let i = 0; i < 150; i++){
            Engine.stars.push({
                x: Math.random() * Engine.width,
                y: Math.random() * Engine.height,
                radius: Math.random() * 8 + 3
            })
        }

        SceneManager.nextScene = nextScene

        if(settings){
            Engine.layers = settings.layers
        }

        requestAnimationFrame(Engine.gameLoop)

    }

    //game loop (loop through as the game plays)
    //game needs to update, draw items on screen, and recall the game loop
    static gameLoop(){
        SceneManager.update()

        Engine.update()
        Engine.draw()

        Time.update()
        Input.update()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update(){
        //call the update in your Scene file
        // update()
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }
    
    static draw(){

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