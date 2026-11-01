class SkillController extends Component{
    data
    keys = []
    cooldownLeft = 0

    update(){
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
        if(ability.block) return
        
        let facing = Math.sign(this.transform.scale.x)
        let scale = ability.scale ?? 1

        let attack = new GameObject("Attack")
        attack.addComponent(new Polygon(), {fillStyle: this.data.fillStyle, points: ability.shape})
        attack.addComponent(new Collider(), {points: ability.hitbox ?? ability.shape})
        attack.addComponent(new AttackController(), {
            player: this.gameObject,
            direction: facing,
            damage: ability.damage,
            speed: ability.speed ?? 0,
            range: ability.range ?? 0,
            lifetime: ability.lifetime ?? 0
        })

        let position = new Vector2(this.transform.position.x + ability.offset * facing, this.transform.position.y)
        instantiate(attack, position)
        attack.transform.scale = new Vector2(scale * facing, scale)
    }
}