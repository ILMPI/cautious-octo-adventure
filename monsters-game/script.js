// preventing ditortions of html canvas by sizing them
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;
});
//this part of the code will only run once
ctx.fillStyle = 'white';
ctx.lineWidth = 3;
ctx.strokeStyle = 'white';

//acces to the game, to know when it move outside the game area
class Player {
    constructor(game){
        this.game = game;
        this.collisionX = this.game.width * 0,5;
        this.collisionY = this.game.height * 0,5;
        this.collisionRadius = 30;
    }
    //method, create circle to represent our player
    draw(context){
        context.beginPath();
        context.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2);
        context.stroke();
    }

}
// to manage all the game logic
class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        //when we start the game it create a player
        this.player = new Player(this);
    }
    render(context){
        this.player.draw(context);
    }
}

const game = new Game(canvas);
game.render(ctx);
console.log(game);
//animation loop to draw and update our game over and over to create an ilusion of movement
function animate(){

}