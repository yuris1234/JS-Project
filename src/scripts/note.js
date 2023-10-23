import noteFreq from "./noteTable";

class Note {
    constructor(canvas, ctx, audioCtx) {

        this.velocity = this.getRandomArbitrary(1, 3);
        this.pos = {
            x: this.getRandomArbitrary(100, canvas.width),
            y: 0
        };
        this.audioCtx = audioCtx
        this.ctx = ctx;
        this.canvas = canvas;
        this.appear = true;
        this.collision = false;
        this.freq = noteFreq[this.getRandomInt(0,1)][this.getRandomAlpha()];
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
            this.playTone();
        } else {
            this.draw();
            this.pos.y += this.velocity;
        }
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    getRandomAlpha() {
        let alpha = ['A','B','C','D','E','F','G'];
        let num = this.getRandomInt(0,6);
        return alpha[num];
    }

    playTone() {
        // debugger
        const osc = this.audioCtx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.value = this.freq;
        // (this.freq, this.audioCtx.currentTime)
        osc.connect(this.audioCtx.destination)
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.1);
    }

    // checkCollision(bucket) {
    //     if (
    //         this.pos.x <= bucket.pos + 100 &&
    //         this.pos.y >= this.canvas.height - 100 &&
    //         this.pos.x >= bucket.pos - 100 &&
    //         this.pos.y <= this.canvas.height + 100 
    //     ) {
    //         this.collision = true;

    //     }
    // }

}
export default Note;