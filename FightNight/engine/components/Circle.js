class Circle extends Component{
    radius = 100
    fillStyle = "white"
    strokeStyle = "black"
    lineWidth = 10

    draw(ctx){
        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.fillStyle
        ctx.fill()
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth
        ctx.stroke()
    }
}