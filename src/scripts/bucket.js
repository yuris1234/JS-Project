class Bucket {
    constructor(width, height, ctx) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.pos = this.canvasWidth/2; 
        this.velocity = 0;
        this.keys = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            }
        }
        this.ctx = ctx;

        let boundArrowKeyDown = this.handleArrowKeyDown.bind(this);
        let boundArrowKeyUp = this.handleArrowKeyUp.bind(this);
        document.addEventListener("keydown", (e) => {
            boundArrowKeyDown(e);
        })
        document.addEventListener("keyup", (e) => {
            boundArrowKeyUp(e);
        })
    }

    draw() {
        let img = new Image();
        img.src = "src/scripts/half-sphere.png";
        img.onload = () => {
            this.ctx.fillStyle = 'beige';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.ctx.drawImage(img, this.pos, this.canvasHeight-100, 100, 100);
        }
    }

    update() {
        this.draw();
        this.velocity = 0;
        if (this.keys.right.pressed && this.pos <= this.canvasWidth-100) this.velocity = 3;
        else if (this.keys.left.pressed && this.pos >= 0) this.velocity = -3;
        this.pos += this.velocity;
    }

    handleArrowKeyDown(e) {
        switch (e.key) {
            case "ArrowRight":
                this.keys.right.pressed = true;
                break;
            case "ArrowLeft":
                this.keys.left.pressed = true;
                break;
        }
    }

    handleArrowKeyUp(e) {
        switch (e.key) {
            case "ArrowRight":
                this.keys.right.pressed = false;
                break;
            case "ArrowLeft":
                this.keys.left.pressed = false;
                break;
        }
    }

}
export default Bucket;