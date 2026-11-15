class HitFlash extends Component{
    duration = 0.12   //seconds to stay white
    timeLeft = 0

    start(){
        this.polygon = this.gameObject.getComponent(Polygon)
        this.originalColor = this.polygon.fillStyle
    }

    flash(){
        this.timeLeft = this.duration
    }

    update(){
        if(this.timeLeft > 0){
            this.timeLeft -= Time.deltaTime
            this.polygon.fillStyle = "white"
        }
        else{
            this.polygon.fillStyle = this.originalColor
        }
    }
}