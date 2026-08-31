class Engine{
    static canvas

    static ctx

    static start(){
        Engine.canvas = document.querySelector("#canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        requestAnimationFrame(Engine.gameLoop)

    }

    static gameLoop(){
        Engine.update()
        Engine.draw()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update(){
        //call the update in your game spec file
        update()
    }

    static draw(){
        Engine.canvas.width = window.innerWidth;
        Engine.canvas.height = window.innerHeight;

        //call the draw in your game spec file
        draw(Engine.ctx)
    }
}