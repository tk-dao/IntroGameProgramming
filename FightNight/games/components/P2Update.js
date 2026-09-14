
//handles player movement and fires laser
class P2Update extends Component{
    
    
    start(){
    }
    
    //update every frame
    update() {


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
            
    }
}