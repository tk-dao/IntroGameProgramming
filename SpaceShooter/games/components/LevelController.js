class LevelController extends Component{

    start(){
        SceneManager.loadScene(GenericLevel, true)
    }

    update(){
        let enemyGameObject = GameObject.find("Enemy")
        //if no more enemies
        if (!enemyGameObject){
            //change scene to level 2
            SceneManager.loadScene(Level02)
        }
    }

}