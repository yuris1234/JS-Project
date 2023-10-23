import Bucket from "./bucket";
import Note from "./note";

class Game {
    constructor(canvas, ctx) {
        // debugger
        this.bucket = new Bucket(canvas.width, canvas.height, ctx);
        this.notes = [];
        this.ctx = ctx;
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
            let newNote = new Note(this.canvas, this.ctx);
            this.notes.push(newNote);
        }
        // debugger
    }

    animate() {
        // this.ctx.fillStyle = 'white';
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.bucket.update();
        let notesHolder = [];
        this.notes.forEach((note) => {
            if (note.appear) {
                notesHolder.push(note);
            }
            note.update();
        })
        this.notes = notesHolder;
        while (this.notes.length < 10) {
            let newNote = new Note(this.canvas, this.ctx);
            this.notes.push(newNote);
        } 
        // this.bucket.update();
        // this.ctx.fillStyle = 'white';
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
        let boundAnimate = this.animate.bind(this);
        window.requestAnimationFrame(boundAnimate);
    }
}
export default Game;