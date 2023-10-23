class Note {
    constructor(canvas, ctx) {
        this.velocity = this.getRandomArbitrary(1, 3);
        this.pos = {
            x: this.getRandomArbitrary(100, canvas.width),
            y: 0
        };
        this.appear = true;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw() {
        let img = new Image();
        img.src = "src/scripts/music_note.png";
        img.onload = () => {
            this.ctx.drawImage(img, this.pos.x, this.pos.y, 100, 100);
        }
    }

    update() {
        if (this.pos.y >= this.canvas.height- 100) {
            this.appear = false;
        } else {
            this.draw();
            this.pos.y += this.velocity;
        }
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    // getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    //   }

}
export default Note;