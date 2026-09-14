
//handles player movement and fires laser
class UpdateComponent extends Component{
    
    
    //reset laser cooldown
    start(){
        this.timeSinceLastLaser = 0
    }
    
    //update every frame
    update() {
        //count frame since last laser fired
        this.timeSinceLastLaser += 1

        //console.log(Input.keysDown)

        //moves player object based on arrow keys press
        if (Input.keysDown.includes("ArrowRight")) {
            this.transform.position.x += 100

        }
        if (Input.keysDown.includes("ArrowLeft")) {
            this.transform.position.x -= 100

        }
        if (Input.keysDown.includes("ArrowUp")) {
            this.transform.position.y -= 100

        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.transform.position.y += 100

        }

        //fires laser every 10 frames
        if (this.timeSinceLastLaser > 10) {
            this.timeSinceLastLaser = 0
            //create laser (uses clone so position doesn't affect main player object position)
            instantiate(new LaserGameObject(), this.transform.position.clone())


        }
            
    }
}