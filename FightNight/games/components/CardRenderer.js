class CardRenderer extends Component{
    draw(ctx){
        const width = CharacterData.CardWidth
        const height = CharacterData.CardHeight

        ctx.fillStyle = "black"
        ctx.fillRect(-width / 2, -height / 2, width, height)
        ctx.strokeStyle = "white"
        ctx.lineWidth = 10
        ctx.strokeRect(-width / 2, -height / 2, width, height)
    }
}