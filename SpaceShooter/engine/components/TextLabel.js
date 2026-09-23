class TextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"

    draw(ctx) {
        let position = this.transform.position
            
        //Signaling to the context that I'm going to draw something
        ctx.save();

        //set center of the text
        ctx.translate(position.x, position.y);
        ctx.scale(this.transform.scale.x * 10, this.transform.scale.y * 10)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle;
        ctx.fillText(this.text, 0, 0)

        //signaling that I'm done drawing
        ctx.restore();
    }
}