class CharacterSelectController extends Component{
    start(){
        this.p1Index = 0
        this.p2Index = 2
        this.p1Ready = false
        this.p2Ready = false
        this.lastKeys = []
    }

    pressed(key){
        return Input.keysDown.includes(key) && !this.lastKeys.includes(key)
    }

    update(){
        //if player 1 still choosing allow move selection
        if(!this.p1Ready){
            //move selection left, if same index as p2 skip to next selection
            if(this.pressed("KeyA")){
                this.p1Index--
                if(this.p1Index < 0){
                    this.p1Index = 2
                }
                if(this.p1Index == this.p2Index){
                    this.p1Index--
                    if(this.p1Index < 0){
                        this.p1Index = 2
                    }
                }
            }
            //move selection right, if same index as p2 skip to next selection
            if(this.pressed("KeyD")){
                this.p1Index++
                if(this.p1Index > 2){
                    this.p1Index = 0
                }
                if(this.p1Index == this.p2Index){
                    this.p1Index++
                    if(this.p1Index > 2){
                        this.p1Index = 0
                    }
                }
            }
        }

        //if player 2 is still choosing allow move selection
        if(!this.p2Ready){
            //move selection left, if same index as p1 skip to next selection
            if(this.pressed("ArrowLeft")){
                this.p2Index--
                if(this.p2Index < 0){
                    this.p2Index = 2
                }
                if(this.p2Index == this.p1Index){
                    this.p2Index--
                    if(this.p2Index < 0){
                        this.p2Index = 2
                    }
                }
            }
            //move selection right, if same index as p1 skip to next selection
            if(this.pressed("ArrowRight")){
                this.p2Index++
                if(this.p2Index > 2){
                    this.p2Index = 0
                }
                if(this.p2Index == this.p1Index){
                    this.p2Index++
                    if(this.p2Index > 2){
                        this.p2Index = 0
                    }
                }
            }
        }

        //submit selection p1
        if(this.pressed("KeyF")){
            this.p1Ready = !this.p1Ready
        }
        //submit selection p2
        if(this.pressed("Enter")){
            this.p2Ready = !this.p2Ready
        }

        if(this.p1Ready && this.p2Ready){
            Settings.p1Character = this.p1Index
            Settings.p2Character = this.p2Index
            SceneManager.loadScene(Arena)
        }

        this.lastKeys = Input.keysDown.slice()
    }

    draw(ctx){
        const padding = 30   // gap between the card and the red box
        const sWidth = CharacterData.CardWidth + padding * 2
        const sHeight = CharacterData.CardHeight + padding * 2
        const width = CharacterData.CardWidth
        const height = CharacterData.CardHeight
        const p1x = CharacterData.CardXCoords[this.p1Index]
        const p2x = CharacterData.CardXCoords[this.p2Index]
        const y = CharacterData.CardY
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)"

        //Player one select
        if(this.p1Ready){
            ctx.strokeStyle = "rgb(129, 10, 10)"
            ctx.fillRect(p1x - width / 2, y - height / 2, width, height)
        }
        else{
            ctx.strokeStyle = "rgb(220, 17, 17)"
        }
        ctx.lineWidth = 30
        ctx.strokeRect(p1x - sWidth / 2, y - sHeight / 2, sWidth, sHeight)
        
        //Player two select
        if(this.p2Ready){
            ctx.strokeStyle = "rgb(7, 111, 43)"
            ctx.fillRect(p2x - width / 2, y - height / 2, width, height)
        }
        else{
            ctx.strokeStyle = "rgb(11, 185, 72)"
        }
        ctx.lineWidth = 30
        ctx.strokeRect(p2x - sWidth / 2, y - sHeight / 2, sWidth, sHeight)
    }
}