class Stars extends Component{
    static stars = []

    start(){
        //makes a list of random points around the screen for stars (150 times)
        if(Stars.stars.length == 0){
            for(let i = 0; i < 150; i++){
                Stars.stars.push({
                    x: Math.random() * Engine.width,
                    y: Math.random() * Engine.height,
                    radius: Math.random() * 8 + 3
                })
            }
        }
    }

    draw(ctx){
        //adds background
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillRect(0, 0, Engine.width, Engine.height)

        //fills the screen with stars
        ctx.fillStyle = "white"
        for(const star of Stars.stars){
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
            ctx.fill()
        }
    }
}