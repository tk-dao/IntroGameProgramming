
class Scene{

    //holds all game object in current scene
    gameObjects = []

    //adds game object to scene, sets starting position to 0,0
    instantiate(gameObject, position = new Vector2(0, 0), rotation = 0){
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
        gameObject.transform.rotation = rotation
    }

    //starts all game objects in scene
    start(){
        for(const gameObject of this.gameObjects) {
            gameObject.start()
        }
    }
    
    
    
    //updates all game objects in scene
    update(){
        for(const gameObject of this.gameObjects){
            gameObject.update()
        }

        let temp = []
        for(const gameObject of this.gameObjects){
            if(!gameObject.markForDestroy){
                temp.push(gameObject)
            }
        }
        this.gameObjects = temp
    }
    
    
    //draws all game objects in scene
    draw(ctx){
        for(const gameObject of this.gameObjects){
            gameObject.draw(ctx)
        }

    }
}

//convenient function so you don't have to do Engine.currentScene
function instantiate(gameObject, position = new Vector2(0, 0), rotation = 0){
    Engine.currentScene.instantiate(gameObject, position, rotation)
}