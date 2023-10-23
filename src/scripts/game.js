import Bucket from "./bucket";
import Note from "./note";

class Game {
    constructor(canvas, ctx, audioCtx) {
        // debugger
        this.bucket = new Bucket(canvas.width, canvas.height, ctx);
        this.notes = [];
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
        this.bucket.update();

        let notesHolder = [];
        this.notes.forEach((note) => {
            if (note.appear) {
                notesHolder.push(note);
            }
            note.checkCollision(this.bucket);
            note.update();
        })
        this.notes = notesHolder;
        while (this.notes.length < 10) {
            let newNote = new Note(this.canvas, this.ctx, this.audioCtx);
            this.notes.push(newNote);
        } 
    
        let boundAnimate = this.animate.bind(this);
        window.requestAnimationFrame(boundAnimate);
    }

    // createNoteTable() {
    //     const noteFreq = [];
    //     for (let i = 4; i < 9; i++) {
    //         noteFreq[i] = [];
    //     }
    //     noteFreq[4]['C'] = 261.6;
    //     noteFreq[4]['D'] = 277.2;
    //     noteFreq[4]['E'] = 329.6;
    //     noteFreq[4]['F'] = 349.2;
    //     noteFreq[4]['G'] = 392.0;
    //     noteFreq[4]['A'] = 440.0;
    //     noteFreq[4]['B'] = 493.9;
    //     noteFreq[5]['C'] = 523.3;
    // }
}
export default Game;