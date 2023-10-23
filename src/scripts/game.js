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
        this.bucket.update();
        this.notes.forEach((ele) => {
            ele.update();
        })
    
        let boundAnimate = this.animate.bind(this);
        window.requestAnimationFrame(boundAnimate);
    }
}
export default Game;