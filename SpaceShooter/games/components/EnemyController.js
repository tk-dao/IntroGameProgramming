class EnemyController extends Component{
    direction = 1
    update(){
        this.transform.position.x += Time.deltaTime * 500 * this.direction

        if(this.transform.position.x > 5000){
            this.direction = -1
        }
        if(this.transform.position.x < 1000){
            this.direction = 1
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            this.gameObject.destroy()
        }
    }
}