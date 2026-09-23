
//controls the laser every frame
class LaserController extends Component{


    update(){
        //moves the laser upwards
        this.transform.position.y -= Time.deltaTime * 2000


        if(this.transform.position.y < 500){
            this.gameObject.destroy()
        }

        //Collision check
        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")

        for(const enemyGameObject of enemyGameObjects){
            let enemyPosition = enemyGameObject.transform.position
    
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 75){
                this.gameObject.destroy()
                // enemyGameObject.destroy()
                let healthComponent = enemyGameObject.getComponent(Health)
                healthComponent.health --
                Globals.points ++
            }

        }
    }
}