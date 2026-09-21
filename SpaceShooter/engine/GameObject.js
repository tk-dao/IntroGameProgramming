class GameObject{

    //all components attached to game object
    components = []
    markForDestroy = false
    name

    //get the transform component
    get transform(){
        return this.components[0]
    }

    //game object is assigned transform component immedietely
    constructor(name){
        this.addComponent(new Transform())
        this.name = name
    }

    //adds a component to the game object
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    //calls start on every component
    start(){
        for(const component of this.components){
            component.start?.()
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

    static find(name){
        //SAME AS 
        //return engine.currentScene.gameObjects.find(function(go){return go.name == name})
        return Engine.currentScene.gameObjects.find(go=>go.name == name)
    }
}