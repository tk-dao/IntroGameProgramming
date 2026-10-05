class CardRenderer extends Component{
    draw(ctx){
        const pos = this.transform.position
        const width = CharacterData.CardWidth
        const height = CharacterData.CardHeight
        const data = CharacterData.characters[this.index]

        //fill card black background
        ctx.fillStyle = "black"
        ctx.fillRect(pos.x - width / 2, pos.y - height / 2, width, height)
        //draw card border
        ctx.strokeStyle = "white"
        ctx.lineWidth = 10
        ctx.strokeRect(pos.x - width / 2, pos.y - height / 2, width, height)
        
    }
}