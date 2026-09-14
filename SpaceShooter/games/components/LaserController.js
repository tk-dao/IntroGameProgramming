
//controls the laser every frame
class LaserController extends Component{


    update(){
        //moves the laser upwards
        this.transform.position.y -= 100


        if(this.transform.position.y < 500){
            this.gameObject.destroy()
        }
    }
}