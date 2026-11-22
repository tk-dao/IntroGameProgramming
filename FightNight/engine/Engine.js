class Engine{
    static canvas
    static ctx
    static layers = ["default", "UI"]
    static collisionLayers = []
    static width = 6000
    static height = 3375

    static aspectRatio
    static cameraWidthInWorldSpace

    static letterBoxingWidth = 0
    static letterBoxingHeight = 0

    static start(nextScene, settings){
        //setup canvas and contex for game
        Engine.canvas = document.querySelector("#canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        //make a listener to keep track when keys get pressed and released
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        SceneManager.nextScene = nextScene

        if(settings){
            Engine.layers = settings.layers
            Engine.aspectRatio = settings.aspectRatio
            Engine.cameraWidthInWorldSpace = settings.cameraWidthInWorldSpace
            if(settings.collisionLayers){
                Engine.collisionLayers = settings.collisionLayers
            }
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

        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        //call the draw in your Scene file
        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }
}