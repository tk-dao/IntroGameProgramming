class AttackController extends Component{
    player
    direction = 1
    damage = 0
    speed = 0
    range = 0
    lifetime = 0
    traveled = 0
    age = 0
    target

    onCollisionStay(other){
        if(other == this.player) return
        if(other.getComponent(Health)){
            this.target = other
        }
    }

    update(){
        if(this.target){
            let targetSkills = this.target.getComponent(SkillController)
            let blocking = targetSkills && targetSkills.blockTime > 0

            if(!blocking){
                this.target.getComponent(Health).health -= this.damage
            }
            this.gameObject.destroy()
            return
        }

        this.transform.position.x += this.speed * this.direction
        this.traveled += this.speed
        this.age += Time.deltaTime

        if(this.speed > 0 && this.traveled >= this.range){
            this.gameObject.destroy()
        }

        if(this.lifetime > 0 && this.age >= this.lifetime){
            this.gameObject.destroy()
        }
    }
}