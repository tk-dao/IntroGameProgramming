class GameObject{

    //all components attached to game object
    components = []
    markForDestroy = false
    name
    tags = []

    //get the transform component
    get transform(){
        return this.components[0]
    }

    //game object is assigned transform component immedietely
    constructor(name, tags = []){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
    }

    //adds a component to the game object
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    //calls start on every component
    start(){
        for(const component of this.components.filter(c=>!c.didStart)){
            component.start?.()
            component.didStart = true
        }
    }
    
    
    //calls update on every component
    update(){
        for(const component of this.components){
            component.update?.()
        }
        
    }
    
    
    //calls draw on every component
    draw(ctx){
        for(const component of this.components){
            component.draw?.(ctx)
        }

    }

    destroy(){
        this.markForDestroy = true
    }

    getComponent(type){
        return this.components.find(c=>c instanceof type)
    }

    static find(name){
        //SAME AS 
        //return SceneManager.currentScene.gameObjects.find(function(go){return go.name == name})
        return SceneManager.currentScene.gameObjects.find(go=>go.name == name)
    }
    static findGameObjectsWithTag(tag){
        //SAME AS 
        //return SceneManager.currentScene.gameObjects.find(function(go){return go.name == name})
        return SceneManager.currentScene.gameObjects.filter(go=>go.tags.includes(tag))
    }
}