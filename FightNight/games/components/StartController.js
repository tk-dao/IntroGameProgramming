class StartController extends Component{

    start(){

    }

    update(){
        if(Input.keysDown.includes("Space")){
            SceneManager.loadScene(CharacterSelectScreen)
        }
    }
}