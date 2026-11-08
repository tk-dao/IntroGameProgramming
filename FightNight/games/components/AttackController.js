class AttackController extends Component{
    player
    direction = 1
    damage = 0
    speed = 0
    range = 0
    lifetime = 0
    knockback = 0
    explosionRadius = 0
    traveled = 0
    age = 0
    target
    hitStage = false

    onTriggerStay(other){
        if(other == this.player) return
        if(other.getComponent(Health)){
            this.target = other
        }

        if(other.name == "Stage"){
            this.hitStage = true
        }
    }

    update(){

        //checks if hits target
        if(this.target){
            if(!this.isBlocking(this.target)){
                this.target.getComponent(Health).health -= this.damage
            }
            this.end()
            return
        }
        //checks if hits stage (fireball only)
        if(this.hitStage){
            this.end()
            return
        }

        this.transform.position.x += this.speed * this.direction
        this.traveled += this.speed
        this.age += Time.deltaTime

        if(this.speed > 0 && this.traveled >= this.range){
            this.end()
            return
        }

        if(this.lifetime > 0 && this.age >= this.lifetime){
            this.end()
            return
        }
    }

    isBlocking(player){
        let skills = player.getComponent(SkillController)
        return skills && skills.blockTime > 0
    }

    end(){
        if(this.explosionRadius > 0){
            this.explode()
        }
        this.gameObject.destroy()
    }

    explode(){
        let center = this.transform.position

        //knockback other player not the user
        for(const player of GameObject.findGameObjectsWithTag("Player")){
            if(player == this.player || this.isBlocking(player)){
                continue
            }
            

            let distance = player.transform.position.minus(center).magnitude
            if(distance > this.explosionRadius) continue

            let away = Math.sign(player.transform.position.x - center.x) || this.direction
            let rb = player.getComponent(RigidBody)
            rb.velocity.x = this.knockback * away
            rb.velocity.y = -800
        }

        //quick visual so you can see the blast radius
        //(reuses AttackController just for its lifetime timer, no collider, so it can't hit anything)
        let effect = new GameObject("Explosion")
        effect.addComponent(new Circle(), {radius: this.explosionRadius, fillStyle: "rgba(255, 255, 255, 0.5)", strokeStyle: "transparent"})
        effect.addComponent(new AttackController(), {lifetime: 0.2})
        instantiate(effect, center.clone())
    }
}