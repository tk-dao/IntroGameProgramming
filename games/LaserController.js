
//controls the laser every frame
class LaserController extends Component{


    update(){
        //moves the laser upwards
        this.transform.position.y -= 100
    }
}