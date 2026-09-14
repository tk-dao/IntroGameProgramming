class Polygon extends Component{
    //magenta color if there is smth wrong
    fillStyle = "magenta"
    //list of points that draws the polygon's shape
    points = []

    
    draw(ctx) {
        let position = this.transform.position
            
        //Signaling to the context that I'm going to draw something
        ctx.save();

        //set center of our object
        ctx.translate(position.x, position.y);

        //draws using the points array
        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        //fill polygon with this color
        ctx.fillStyle = this.fillStyle;
        ctx.fill();

        //signaling that I'm done drawing
        ctx.restore();
    }
}