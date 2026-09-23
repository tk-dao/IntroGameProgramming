
//handles player movement and fires laser
class P2Update extends Component{
    
    vy = 0
    gravity = 2
    grounded = false

    applyGravity(){
        this.vy += this.gravity
        this.transform.position.y += this.vy
    }

    collideStage(){
        this.grounded = false

        let stage = GameObject.find("Stage")

        let p = this.transform.position //player one position
        let s = stage.transform.position //stage position

        let half = 100
        let stageHalfW = 2000
        let stageTop = s.y + 0

        let playerBottom = p.y + half //find bottom of player shape

        //checks if players right-most side is off of left-most point of stage
        //AND
        //checks if players left-most side is off of right-most point of stage
        let offStage = p.x + half > s.x - stageHalfW && p.x < s.x + stageHalfW 

        if(offStage && playerBottom >= stageTop){
            p.y = stageTop - half
            this.vy = 0
            this.grounded = true
        }

    }
    
    start(){
    }
    
    //update every frame
    update() {


        //console.log(Input.keysDown)

        //moves player object based on arrow keys press
        if (Input.keysDown.includes("ArrowRight")) {
            this.transform.position.x += 35

        }
        if (Input.keysDown.includes("ArrowLeft")) {
            this.transform.position.x -= 35

        }
        if (Input.keysDown.includes("ArrowUp") && this.grounded) {
            this.vy = -35

        }

        this.applyGravity()
        this.collideStage()
            
    }
}