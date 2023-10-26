import Bucket from "./bucket";
import Note from "./note";
import musicNoteSequence from "./musicNoteSequence";

class Game {
    constructor(gameCanvas, gameCtx, audioCtx, sequenceCanvas, sequenceCtx) {
        this.bucket = new Bucket(gameCanvas.width, gameCanvas.height, gameCtx);
        this.notes = [];
        this.collectedNotes = [];
        this.ctx = gameCtx;
        this.audioCtx = audioCtx;
        this.canvas = gameCanvas;
        this.sequence = new musicNoteSequence(sequenceCanvas, sequenceCtx);
        this.requestId = '';
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
                this.sequence.update(note);
            }
            if (note.appear) {
                // debugger
                notesHolder.push(note);
            }
            note.update();
            if (this.collectedNotes.length === 10) {
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

    // addMusicNoteSequence(note) {
    //     let img = new Image();
    //     img.src = "src/scripts/music_note.png";
    //     img.onload = () => {
    //         this.ctx.fillStyle = 'red';
    //         this.ctx.font = "20px serif";
    //         this.ctx.drawImage(img, this.pos.x, this.pos.y, 50, 50);
    //         this.ctx.fillText(note.alpha, note.pos.x+20, this.pos.y);
    //     }
    // }
    

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