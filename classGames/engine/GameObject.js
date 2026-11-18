class GameObject{

    //all components attached to game object
    components = []
    markForDestroy = false
    name
    tags = []
    layer = "default"

    //get the transform component
    get transform(){
        return this.components[0]
    }

    //game object is assigned transform component immedietely
    constructor(name, tags = [], layer = "default"){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
        this.layer = layer
    }

    //adds a component to the game object
    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }


    broadcastMessage(message, args = []){
        for(const component of this.components){
            component[message]?.(...args)
        }
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

        ctx.save()
        if(this.transform instanceof RectTransform){
            if(!this.transform.useLetterBoxing){

                const width = Engine.canvas.width
                const height = Engine.canvas.height
    
                const upperLeft = new Vector2(
                    width * this.transform.anchorMin.x + this.transform.offsetUpperLeft.x, 
                    height * this.transform.anchorMin.y + this.transform.offsetUpperLeft.y)
                const lowerRight = new Vector2(
                    width * this.transform.anchorMax.x + this.transform.offsetLowerRight.x, 
                    height * this.transform.anchorMax.y + this.transform.offsetLowerRight.y)
    
                this.transform.position = new Vector2((upperLeft.x + lowerRight.x) / 2, (upperLeft.y + lowerRight.y) / 2)
                this.transform.scale = new Vector2((lowerRight.x - upperLeft.x) / 2, (lowerRight.y - upperLeft.y) / 2)
            }
            else {
                const width = Engine.canvas.width - Engine.letterBoxingWidth
                const height = Engine.canvas.height - Engine.letterBoxingHeight
    
                const upperLeft = new Vector2(
                    width * this.transform.anchorMin.x + this.transform.offsetUpperLeft.x, 
                    height * this.transform.anchorMin.y + this.transform.offsetUpperLeft.y)
                const lowerRight = new Vector2(
                    width * this.transform.anchorMax.x + this.transform.offsetLowerRight.x, 
                    height * this.transform.anchorMax.y + this.transform.offsetLowerRight.y)
    
                this.transform.position = new Vector2(
                    Engine.letterBoxingWidth/2 +(upperLeft.x + lowerRight.x) / 2, 
                    Engine.letterBoxingHeight/2 + (upperLeft.y + lowerRight.y) / 2)
                this.transform.scale = new Vector2((lowerRight.x - upperLeft.x) / 2, (lowerRight.y - upperLeft.y) / 2)
            }
        }

        ctx.setTransform(ctx.getTransform().multiply(this.transform.getWorldMatrix()))
        
        for(const component of this.components){
            component.draw?.(ctx)
        }
        
        ctx.restore()
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
    static findGameObjectsByType(type){
        return SceneManager.currentScene.gameObjects.filter(go=>go.components.find(c=>c instanceof type))
    }
}