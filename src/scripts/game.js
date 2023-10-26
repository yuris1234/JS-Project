import Bucket from "./bucket";
import Note from "./note";
import musicNoteSequence from "./musicNoteSequence";

class Game {
    constructor(gameCanvas, gameCtx, audioCtx, sequenceCanvas, sequenceCtx) {
        this.bucket = new Bucket(gameCanvas, gameCtx);
        this.collectedNotes = [];
        this.ctx = gameCtx;
        this.audioCtx = audioCtx;
        this.canvas = gameCanvas;
        this.sequence = new musicNoteSequence(sequenceCanvas, sequenceCtx);
        this.newNotes();
        this.animate();
    }

    run() {
        this.newNotes();
        this.sequence.reset();
        this.animate();
    }

    newNotes() {
        this.notes = [];
        for (let i = 0; i < 10; i++) {
            let newNote = new Note(this.canvas, this.ctx, this.audioCtx);
            this.notes.push(newNote);
        }
    }

    animate() {
        if (this.sequence.sequence.length < 10) {
            this.bucket.update();

            let notesHolder = [];
            this.notes.forEach((note) => {

                if (note.checkCollision(this.bucket)) {
                    note.playTone();
                    this.sequence.update(note);
                }

                if (note.appear) {
                    notesHolder.push(note);
                }

                note.update();
            })
        
            this.notes = notesHolder;

            while (this.notes.length < 10) {
                let newNote = new Note(this.canvas, this.ctx, this.audioCtx);
                this.notes.push(newNote);
            } 
        

            let boundAnimate = this.animate.bind(this);
            this.requestId = window.requestAnimationFrame(boundAnimate);
        } else {
            this.sequence.play();
        }
    }
}
export default Game;