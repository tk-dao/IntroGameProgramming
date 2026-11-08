class SkillController extends Component{
    data
    keys = []
    cooldownLeft = 0
    shield
    blockTime = 0

    update(){

        if(this.blockTime > 0){
            this.blockTime -= Time.deltaTime
        }
        if(this.shield){
            let distance = Math.abs(this.shield.transform.position.x)
            this.shield.transform.position.x = this.blockTime > 0 ? distance : -distance

            let size = this.blockTime > 0 ? 1.5 : 1
            this.shield.transform.scale = new Vector2(size, size)
        }

        if(this.cooldownLeft > 0){
            this.cooldownLeft -= Time.deltaTime
        }

        if(Input.keysDownThisFrame.includes(this.keys[0])){
            this.use(this.data.abilities[0])
        }
        if(Input.keysDownThisFrame.includes(this.keys[1]) && this.cooldownLeft <= 0){
            this.use(this.data.abilities[1])
            this.cooldownLeft = this.data.abilities[1].cooldown 
        }
    }

    use(ability){
        if(ability.block){
            this.blockTime = ability.duration
            return
        }
        
        let facing = Math.sign(this.transform.scale.x)
        let scale = ability.scale ?? 1

        let attack = new GameObject("Attack")
        attack.addComponent(new Polygon(), {fillStyle: this.data.fillStyle, points: ability.shape})
        attack.addComponent(new Collider(), {points: ability.hitbox ?? ability.shape, isTrigger: true})
        attack.addComponent(new AttackController(), {
            player: this.gameObject,
            direction: facing,
            damage: ability.damage,
            speed: ability.speed ?? 0,
            range: ability.range ?? 0,
            lifetime: ability.lifetime ?? 0,
            knockback: ability.knockback ?? 0,
            explosionRadius: ability.explosionRadius ?? 0
        })
        if(ability.gravity){
            attack.addComponent(new RigidBody(), {gravity: ability.gravity})
        }

        let position = new Vector2(this.transform.position.x + ability.offset * facing, this.transform.position.y)
        instantiate(attack, position)
        attack.transform.scale = new Vector2(scale * facing, scale)
    }
}