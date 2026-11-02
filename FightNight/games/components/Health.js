class Health extends Component{
    health = 1
    maxHealth = 1
    dead = false
    margin = 100 //how far off the edge before kills character

    start(){
        this.maxHealth = this.health
    }

    update(){
        if(this.dead) return

        //offscreen? kill character immediately
        let position = this.transform.position
        if(position.y > Engine.height + this.margin){
            this.health = 0
        }

        //actual health check
        if(this.health <= 0){
            this.health = 0
            this.die()
        }
    }

    die(){
        this.dead = true

        //destory equipment parented to character
        for(const gameObject of SceneManager.currentScene.gameObjects){
            if(gameObject.transform.parent == this.transform){
                gameObject.destroy()
            }
        }
        this.gameObject.destroy()
    }
}