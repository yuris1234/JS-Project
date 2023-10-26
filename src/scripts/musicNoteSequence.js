class musicNoteSequence {
    constructor(sequenceCanvas, sequenceCtx) {
        this.canvas = sequenceCanvas;
        this.ctx = sequenceCtx;
        this.sequence = [];
    }

    draw() {
        let img = new Image();
        img.src = "src/media/music_note.png";
        img.onload = () => {
            this.sequence.forEach((note) => {
                this.ctx.fillStyle = "black";
                this.ctx.font = "20px serif";
                this.ctx.drawImage(img, this.pos, 10, 50, 50);
                this.ctx.fillText(note.alpha, this.pos+10, 20);
                this.pos += this.canvas.width/10;
            })
        }
    }

    update(note) {
        this.sequence.push(note);
        this.pos = 10;
        this.draw();
    }

    play() {
        let i = 1;
        this.sequence.forEach((note) => {
            setTimeout(() => {
                note.playTone();
            },(i++)*500);
        })
    }

    reset() { 
        this.sequence = [];
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default musicNoteSequence;