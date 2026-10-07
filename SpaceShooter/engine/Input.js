//class for different inputs the user can do
class Input{
    //keeps track of which keys are currently pressed down
    static keysDown = []

    static keysDownThisFrame = []

    static keysUpThisFrame = []

    static mouseButtonsDown = []
    static mouseButtonsDownThisFrame = []
    static mouseButtonsUpThisFrame = []


    static mousedown(event){
        if(!Input.mouseButtonsDown.includes(event.code))
            Input.mouseButtonsDown.push(event.code)
            Input.mouseButtonsDownThisFrame.push(event.code)
    }

    static mouseup(event){
        // find where this key's code is in the array
        let index = Input.mouseButtonsDown.indexOf(event.button)

        // remove it (1 item, starting at that index)
        Input.mouseButtonsDown.splice(index, 1)
        Input.mouseButtonsUpThisFrame.push(event.button)
    }

    // called when a key is pressed; adds the key's code to keysDown
    // if it isn't already in there (prevents duplicates from key-repeat
    // when a key is held down)
    static keydown(event){
        if(!Input.keysDown.includes(event.button))
            Input.keysDown.push(event.button)
            Input.keysDownThisFrame.push(event.button)
    }

    // called when a key is released; removes the key's code from keysDown
    static keyup(event){
        // find where this key's code is in the array
        let index = Input.keysDown.indexOf(event.code)

        // remove it (1 item, starting at that index)
        Input.keysDown.splice(index, 1)
        Input.keysUpThisFrame.push(event.code)
    }


    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []
        Input.mouseButtonsDownThisFrame = []
        Input.mouseButtonsUpThisFrame = []
    }
}