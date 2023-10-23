class Note {
    constructor(canvas, ctx) {
        this.velocity = Math.random(0.5, 2);
        // debugger
        this.pos = {
            x: this.getRandomInt(100, canvas.width),
            y: 0
        };
        // debugger
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.pos.x, this.pos.y, 10, 10);
    }

    update() {
        this.draw();
        this.pos.y += this.velocity;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

}
export default Note;