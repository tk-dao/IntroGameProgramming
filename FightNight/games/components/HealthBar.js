class HealthBar extends Component{
    width = 1400
    height = 200
    character


    draw(ctx){
        let health = this.character.getComponent(Health)
        let percent = Math.max(health.health / health.maxHealth, 0)

        //empty health fill
        ctx.fillStyle = "rgb(40, 40, 40)"
        ctx.fillRect(0, -this.height / 2, this.width, this.height)

        //remaining health fill
        ctx.fillStyle = "rgb(255, 0, 0)"
        ctx.fillRect(0, -this.height / 2, this.width * percent, this.height)

        //Health bar outline
        ctx.strokeStyle = "black"
        ctx.lineWidth = 15
        ctx.strokeRect(0, -this.height / 2, this.width, this.height)

    }
}