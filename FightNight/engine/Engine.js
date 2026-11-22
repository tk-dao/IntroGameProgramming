class Engine{
    static canvas
    static ctx
    static layers = ["default", "UI"]
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
        
        //call the draw in your Scene file
        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }
}