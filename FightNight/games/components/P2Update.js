
//handles player movement and fires laser
class P2Update extends Component{
    
    vy = 0
    gravity = 2
    grounded = false
    p2Data = CharacterData.characters[Settings.p2Character]

    applyGravity(){
        this.vy += this.gravity
        this.transform.position.y += this.vy
    }

    
    
    start(){
        this.facingLeft = true
        this.transform.scale.x = -1
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
            this.vy = -35

        }

        //health down test
        if (Input.keysDown.includes("KeyJ")){
            this.gameObject.getComponent(Health).health -= 10
        }

        this.applyGravity()
        this.grounded = false
            
    }
}