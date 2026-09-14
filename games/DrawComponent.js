class DrawComponent extends Component{
    draw(ctx) {
        let position = this.transform.position
            
        //Signaling to the context that I'm going to draw something
        ctx.save();

        //set center of our object
        ctx.translate(position.x, position.y);

        //lightning draw from center just set in line 20
        ctx.beginPath()
        ctx.lineTo(-100, -100);
        ctx.lineTo(100, -100);
        ctx.lineTo(0, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(-150, 400);
        ctx.lineTo(-50, 150);
        ctx.lineTo(-200, 150);

        ctx.fillStyle = "blue";
        ctx.fill();

        //signaling that I'm done drawing
        ctx.restore();
    }
}