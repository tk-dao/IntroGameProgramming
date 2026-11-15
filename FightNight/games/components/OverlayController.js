class OverlayController extends Component{

    update(){
        let scene = SceneManager.currentScene
        let pressed = Input.keysDownThisFrame

        if(scene.state == "playing"){
            if(pressed.includes("Escape")){
                scene.state = "paused"
            }
        } 
        else if(scene.state == "paused"){
            if(pressed.includes("Escape")){
                scene.state = "playing"
            }
            else if(pressed.includes("KeyC")){
                scene.state = "controls"
            }
            else if(pressed.includes("Space")){
                SceneManager.loadScene(StartScreen)
            }
        }
        else if(scene.state == "controls"){
            if(pressed.includes("Escape")){
                scene.state = "paused"
            }
        }
        else if(scene.state == "won"){
            if(pressed.includes("Space")){
                SceneManager.loadScene(StartScreen)
            }
        }
    }

    draw(ctx){
        let scene = SceneManager.currentScene
        if(scene.state == "playing"){
            ctx.textAlign = "center"
            ctx.font = "100px Impact"
            ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
            ctx.fillText("ESC - pause", 3000, 150)
            return
        }

        //shadow out arena
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
        ctx.fillRect(0, 0, Engine.width, Engine.height)

        ctx.textAlign = "center"
        ctx.fillStyle = "white"


        if(scene.state == "paused"){
            //text: PAUSED
            ctx.font = "bold 500px Impact"
            ctx.fillText("PAUSED", 3000, Engine.height / 2)
            ctx.font = "120px Impact"
            ctx.fillText("SPACE - exit to start screen" + "         " + "C - controls" + "         " + "ESC - resume game", 3000, Engine.height - 300)
        }
        else if(scene.state == "won"){
            ctx.font = "bold 500px Impact"
            ctx.fillText(scene.winnerText, 3000, Engine.height / 2)

            ctx.font = "120px Impact"
            ctx.fillText("SPACE - exit to start screen", 3000, Engine.height - 300)
        }
        else if(scene.state == "controls"){
            ctx.font = "bold 300px Impact"
            ctx.fillText("CONTROLS", 3000, 600)

            //column headers
            ctx.font = "bold 180px Impact"
            ctx.fillText("PLAYER ONE", 1500, 1100)
            ctx.fillText("PLAYER TWO", 4500, 1100)

            //player one keys
            ctx.font = "130px Impact"
            ctx.fillText("MOVE - A / D", 1500, 1500)
            ctx.fillText("JUMP - W", 1500, 1700)
            ctx.fillText("SKILL 1 - F", 1500, 1900)
            ctx.fillText("SKILL 2 - G", 1500, 2100)

            //player two keys
            ctx.fillText("MOVE - LEFT / RIGHT", 4500, 1500)
            ctx.fillText("JUMP - UP", 4500, 1700)
            ctx.fillText("SKILL 1 - ]", 4500, 1900)
            ctx.fillText("SKILL 2 - \\", 4500, 2100)

            ctx.font = "120px Impact"
            ctx.fillText("ESC - back", 3000, Engine.height - 300)
        }
    }
}