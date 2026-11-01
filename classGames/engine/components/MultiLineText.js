class MultiLineText extends Component{
    fillStyle = "black"
    text = "[BLANK]"
    font = "10px"
    maxWidth = 1500

    draw(ctx) {
        let position = this.transform.position
            
        //Signaling to the context that I'm going to draw something
        ctx.save();

        //set center of the text
        // ctx.translate(position.x, position.y);
        // ctx.scale(this.transform.scale.x * 10, this.transform.scale.y * 10)
        // ctx.rotate(this.transform.rotation)

        ctx.font = this.font
        ctx.fillStyle = this.fillStyle;

        // let measurement = ctx.measureText(this.text)
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxDescent
        let y = 0
        let safeLine = ""
        let possibleLine = ""
        for(let word of this.text.split(" ")){
            possibleLine = safeLine + word + " "
            if(ctx.measureText(possibleLine).width > this.maxWidth){
                ctx.fillText(safeLine, 0, y)
                y += fontHeight
                safeLine = word + " "
            }
            else{
                safeLine = possibleLine
            }
        }
        ctx.fillText(possibleLine, 0, y)
        

        // ctx.fillText(this.text, 0, 0)

        //signaling that I'm done drawing
        ctx.restore();
    }
}