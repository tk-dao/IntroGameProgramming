
//class for vector position, 2d game = 2d vector
class Vector2{
    x
    y

    constructor(x, y){
        this.x = x
        this.y = y
    }

    //clones so changes don't affect the original vector
    clone(){
        return new Vector2(this.x, this.y)
    }
}