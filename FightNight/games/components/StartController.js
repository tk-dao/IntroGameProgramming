class StartController extends Component{

    start(){

    }

    update(){
        if(Input.keysDownThisFrame.includes("Space")){
            SceneManager.loadScene(CharacterSelectScreen)
        }
    }
}