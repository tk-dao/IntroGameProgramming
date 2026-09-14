
//handles player movement and fires laser
class P1Update extends Component{
    
    
    start(){
    }
    
    //update every frame
    update() {


        //console.log(Input.keysDown)

        //moves player object based on arrow keys press
        if (Input.keysDown.includes("KeyD")) {
            this.transform.position.x += 100

        }
        if (Input.keysDown.includes("KeyA")) {
            this.transform.position.x -= 100

        }
        if (Input.keysDown.includes("KeyW")) {
            this.transform.position.y -= 100

        }
        if (Input.keysDown.includes("KeyS")) {
            this.transform.position.y += 100

        }
            
    }
}