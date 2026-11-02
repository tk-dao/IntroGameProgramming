class CooldownOverlay extends Component{
    skills
    cooldown = 1
    radius = 130
    fillStyle = "rgba(255, 255, 255, 0.5)" //opacity 0.5

    draw(ctx){
        let percent = this.skills.cooldownLeft / this.cooldown
        if(percent <= 0) return


        ctx.save()

        //make a circle frame with clip()
        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
        ctx.clip()

        //draws rectangular overlay that goes down inside circle frame so only shows circle overlay
        let height = this.radius * 2 * percent
        ctx.fillStyle = this.fillStyle
        ctx.fillRect(-this.radius, this.radius - height, this.radius * 2, height)

        ctx.restore()
    }
}