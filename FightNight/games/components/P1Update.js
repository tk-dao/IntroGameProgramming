
//handles player movement and fires laser
class P1Update extends Component{
    
    vy = 0
    gravity = 2
    grounded = false
    p1Data = CharacterData.characters[Settings.p1Character]

    applyGravity(){
        this.vy += this.gravity
        this.transform.position.y += this.vy
    }

    onCollisionStay(other){
        if(other.name != "Stage") return

        let stageTop = other.transform.position.y
        let playerBottom = this.transform.position.y + 100

        if(this.vy >= 0 && playerBottom - stageTop < 50){
            this.transform.position.y = stageTop - 100
            this.vy = 0
            this.grounded = true
        }
    }
    
    start(){
        this.facingLeft = false
    }
    
    //update every frame
    update() {



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
        if (Input.keysDown.includes("KeyW") && this.grounded) {
            this.vy = -35

        }

        this.applyGravity()
        this.grounded = false
            
    }
}