class Engine{
    static canvas

    static ctx

    static layers = ["default", "UI"]

    static start(nextScene, settings){
        //setup canvas and contex for game
        Engine.canvas = document.querySelector("#canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        //make a listener to keep track when keys get pressed and released
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)

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
        //sets canvas to width and height of screen
        Engine.canvas.width = window.innerWidth;
        Engine.canvas.height = window.innerHeight;
        
        //call the draw in your Scene file
        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }
}