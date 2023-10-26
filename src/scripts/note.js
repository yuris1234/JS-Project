class Note {
    constructor(canvas, ctx, audioCtx) {
        this.velocity = this.getRandomArbitrary(1, 3);
        this.pos = {
            x: this.getRandomArbitrary(10, canvas.width-10),
            y: 0
        };
        this.audioCtx = audioCtx
        this.ctx = ctx;
        this.canvas = canvas;
        this.appear = true;
        this.collision = false;
        this.alpha = this.getRandomAlpha();
        this.createGain();
        this.sound = this.createAudio();
    }

    createGain() {
        const volumeSlider = document.querySelector("input[name='volume']");
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.connect(this.audioCtx.destination);
        this.gainNode.gain.value = volumeSlider.value;
        volumeSlider.addEventListener("change", (e) => {
            this.gainNode.gain.value = volumeSlider.value;
        }, false);
    }

    updateGain() {
        const volumeSlider = document.querySelector("input[name='volume']");
        this.gainNode.gain.value = volumeSlider.value;
    }

    createAudio() {
        const sound = new Audio();
        sound.crossOrigin = "anonymous";
        switch (this.alpha) {
            case "A": 
                sound.src = "src/media/a.mp3";
                break;
            case "B":
                sound.src = "src/media/b.mp3";
                break;
            case "C":
                sound.src = "src/media/c.mp3";
                break;
            case "D":
                sound.src = "src/media/d.mp3";
                break;
            case "E":
                sound.src = "src/media/e.mp3";
                break;
            case "F":
                sound.src = "src/media/f.mp3";
                break;
            case "G":
                sound.src = "src/media/g.mp3";
                break;
        }
        // sound.connect()
        const source = this.audioCtx.createMediaElementSource(sound);
        source.connect(this.gainNode);
        return sound;
    }

    draw() {
        let img = new Image();
        img.src = "src/media/music_note.png";
        img.onload = () => {
            this.ctx.fillStyle = 'black';
            this.ctx.font = "20px serif";
            this.ctx.drawImage(img, this.pos.x, this.pos.y, 50, 50);
            this.ctx.fillText(this.alpha,this.pos.x+20, this.pos.y);
        };
    }

    update() {
        if (this.pos.y >= this.canvas.height-50 || this.collision) {
            this.appear = false;
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
        let num = this.getRandomInt(0,7);
        return alpha[num];
    }

    playTone() {
        this.updateGain();
        this.sound.play();  
    }

    checkCollision(bucket) {
        if (
            this.pos.x <= bucket.pos + 37.5 &&
            this.pos.y >= this.canvas.height - 75 &&
            this.pos.x >= bucket.pos - 37.5
        ) {
            this.collision = true;
            this.appear = false;
        }
        return this.collision;
    }

}
export default Note;