class OverlayController extends Component{

    update(){
        let scene = SceneManager.currentScene

        if(scene.state == "playing"){
            if(Input.keysDownThisFrame.includes("Escape")){
                scene.state = "paused"
            }
            return
        }

        if(scene.state == "paused" && Input.keysDownThisFrame.includes("Escape")){
            scene.state = "playing"
            return
        }

        if(Input.keysDownThisFrame.includes("Space")){
            SceneManager.loadScene(StartScreen)
        }
    }

    draw(ctx){
        let scene = SceneManager.currentScene
        if(scene.state == "playing") return

        //shadow out arena
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
        ctx.fillRect(0, 0, Engine.width, Engine.height)

        ctx.textAlign = "center"
        ctx.fillStyle = "white"

        //text: PAUSED or PLAYER (ONE or TWO) WINS!
        ctx.font = "bold 500px Impact"
        let title = scene.state == "paused" ? "PAUSED" : scene.winnerText
        ctx.fillText(title, Engine.width / 2, Engine.height / 2)

        //extra control texts below
        ctx.font = "120px Impact"
        let text = scene.state == "paused" ? "SPACE - exit to start screen" + "         " + "ESC - resume game" : "SPACE - exit to start screen"
        ctx.fillText(text, Engine.width / 2, Engine.height - 300)
    }
}