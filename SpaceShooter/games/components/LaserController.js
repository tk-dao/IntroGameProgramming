
//controls the laser every frame
class LaserController extends Component{


    update(){
        //moves the laser upwards
        this.transform.position.y -= Time.deltaTime * 500


        if(this.transform.position.y < 500){
            this.gameObject.destroy()
        }

        //Collision check
        let myPosition = this.transform.position
        let enemyGameObject = GameObject.find("Enemy")

        if(enemyGameObject){
            let enemyPosition = enemyGameObject.transform.position
    
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 20){
                this.gameObject.destroy()
                enemyGameObject.destroy()
            }

        }
    }
}