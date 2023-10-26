class musicNoteSequence {
    constructor(sequenceCanvas, sequenceCtx) {
        this.canvas = sequenceCanvas;
        this.ctx = sequenceCtx;
        this.sequence = [];
        this.pos = 50;
    }

    // addNote(note) {
    //     this.sequence.push(note);
    // }

    draw() {
        let img = new Image();
        img.src = "src/media/music_note.png";
        img.onload = () => {
            this.sequence.forEach((note) => {
                this.ctx.fillStyle = "black";
                this.ctx.font = "20px serif";
                this.ctx.drawImage(img, this.pos, 10, 50, 50);
                this.ctx.fillText(note.alpha, this.pos+10, 20);
                this.pos += 50;
            })
        }
    }

    update(note) {
        this.sequence.push(note);
        this.pos = 50;
        this.draw();
    }
}

export default musicNoteSequence;