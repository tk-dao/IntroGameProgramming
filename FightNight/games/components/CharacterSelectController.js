class CharacterSelectController extends Component{
    start(){

    }

    update(){
        if(Input.keysDown.includes("KeyL")){
            SceneManager.loadScene(Arena)
        }
    }
}