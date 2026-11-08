
//handles player movement and fires laser
class P1Update extends Component{
    
    grounded = false
    p1Data = CharacterData.characters[Settings.p1Character]

    onCollisionStay(other, mtv){
        if(other.name != "Stage" && !other.tags.includes("Player")) return

        if(mtv.y < 0){
            if(this.rb.velocity.y > 0){
                this.rb.velocity.y = 0
            }
            this.rb.velocity.x = 0   //stops knockback slide when landing
            this.grounded = true
        }
    }
    
    start(){
        this.facingLeft = false
        this.rb = this.gameObject.getComponent(RigidBody)
    }

    fixedUpdate(){

        //moves player object based on arrow keys press
        if (Input.keysDown.includes("KeyD")) {
            this.facingLeft = false
            this.transform.scale.x = 1
            this.transform.position.x += this.p1Data.speed
    
        }
        if (Input.keysDown.includes("KeyA")) {
            this.facingLeft = true
            this.transform.scale.x = -1
            this.transform.position.x -= this.p1Data.speed
    
        }
        
        this.grounded = false
    }
    
    //update every frame
    update() {


        if (Input.keysDown.includes("KeyW") && this.grounded) {
            this.rb.velocity.y = -2100

        }

        // //health down test
        // if (Input.keysDown.includes("KeyH")){
        //     this.gameObject.getComponent(Health).health -= 10
        // }

            
    }
}