
//shape of laser (old code, using polygon component now)
class LaserPolygon extends Component{
    draw(ctx) {
        let position = this.transform.position
            
        //Signaling to the context that I'm going to draw something
        ctx.save();

        //set center of our object
        ctx.translate(position.x, position.y);

        //lightning draw from center just set in line 20
        ctx.beginPath()
        ctx.lineTo(-20, 20);
        ctx.lineTo(20, 20);
        ctx.lineTo(0, -20);
        ctx.lineTo(40, -20);
        ctx.lineTo(-30, -80);
        ctx.lineTo(-10, -30);
        ctx.lineTo(-40, -30);
        
        // ctx.lineTo(-10, -40)
        // ctx.lineTo(10, -40)
        // ctx.lineTo(10, 40)
        // ctx.lineTo(-10, 40)
        

        ctx.fillStyle = "red";
        ctx.fill();

        //signaling that I'm done drawing
        ctx.restore();
    }
}