class GameObject{

    //all components attached to game object
    components = []
    markForDestroy = false

    //get the transform component
    get transform(){
        return this.components[0]
    }

    //game object is assigned transform component immedietely
    constructor(){
        this.addComponent(new Transform())
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
}