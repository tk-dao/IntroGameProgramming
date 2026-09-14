
//class for all components
class Component{

    //ref to game object the component is attached to 
    gameObject

    //shortcut to get the game object's transform component
    get transform(){
        return this.gameObject.transform
    }
}