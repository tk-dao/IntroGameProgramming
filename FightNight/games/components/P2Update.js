
//handles player movement and fires laser
class P2Update extends Component{
    
    
    grounded = false
    p2Data = CharacterData.characters[Settings.p2Character]
    
    start(){
        this.facingLeft = true
        this.transform.scale.x = -1
        this.rb = this.gameObject.getComponent(RigidBody)
    }

    onCollisionStay(other, mtv){
        if(other.name != "Stage" && !other.tags.includes("Player")) return

        if(mtv.y < 0){
            if(this.rb.velocity.y > 0){
                this.rb.velocity.y = 0
            }
            this.grounded = true
        }
    }
    
    //update every frame
    update() {


        //console.log(Input.keysDown)

        //moves player object based on arrow keys press
        if (Input.keysDown.includes("ArrowRight")) {
            this.facingLeft = false
            this.transform.scale.x = 1
            this.transform.position.x += this.p2Data.speed

        }
        if (Input.keysDown.includes("ArrowLeft")) {
            this.facingLeft = true
            this.transform.scale.x = -1
            this.transform.position.x -= this.p2Data.speed

        }
        if (Input.keysDown.includes("ArrowUp") && this.grounded) {
            this.rb.velocity.y = -2100

        }

        //health down test
        if (Input.keysDown.includes("KeyJ")){
            this.gameObject.getComponent(Health).health -= 10
        }

        this.grounded = false
            
    }
}