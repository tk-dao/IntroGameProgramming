//class for different inputs the user can do
class Input{
    //keeps track of which keys are currently pressed down
    static keysDown = []

    // called when a key is pressed; adds the key's code to keysDown
    // if it isn't already in there (prevents duplicates from key-repeat
    // when a key is held down)
    static keydown(event){
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    // called when a key is released; removes the key's code from keysDown
    static keyup(event){
        // find where this key's code is in the array
        let index = Input.keysDown.indexOf(event.code)

        // remove it (1 item, starting at that index)
        Input.keysDown.splice(index, 1)
    }
}