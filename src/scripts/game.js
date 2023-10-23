import Bucket from "./bucket";
import Note from "./note";

class Game {
    constructor(canvas, ctx, audioCtx) {
        // debugger
        this.bucket = new Bucket(canvas.width, canvas.height, ctx);
        this.notes = [];
        this.collectedNotes = [];
        this.ctx = ctx;
        this.audioCtx = audioCtx;
        this.canvas = canvas;
        this.newNotes();
        this.animate();
    }

    run() {
        this.animate();
    }

    newNotes() {
        for (let i = 0; i < 10; i++) {
            // debugger
            let newNote = new Note(this.canvas, this.ctx, this.audioCtx);
            this.notes.push(newNote);
        }
        // debugger
    }

    animate() {
        let stopAnimation = false;
        this.bucket.update();

        let notesHolder = [];
        this.notes.forEach((note) => {
            // note.update();
            if (note.checkCollision(this.bucket)) {
                note.playTone();
                this.collectedNotes.push(note);

            }
            if (note.appear) {
                // debugger
                notesHolder.push(note);
            }
            note.update();
            if (this.collectedNotes.length >= 10) {
                // debugger
                this.stopAnimation();
                stopAnimation = true;
            }
            // if (note.appear) {
            //     notesHolder.push(note);
            // }
        })
        if (stopAnimation === true) return;
        this.notes = notesHolder;
        while (this.notes.length < 10) {
            let newNote = new Note(this.canvas, this.ctx, this.audioCtx);
            this.notes.push(newNote);
        } 
    
        let boundAnimate = this.animate.bind(this);
        window.requestAnimationFrame(boundAnimate);
    }

    stopAnimation() {
        let i = 1;
        this.collectedNotes.forEach((note) => {
            setTimeout(() => {
                note.playTone();
            },(i++)*500);
        })

    }
}
export default Game;