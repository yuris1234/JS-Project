class Bucket {
    constructor(width, height, ctx) {
        // debugger
        // this.dimensions = [width, height]
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.ctx = ctx;
    }

    drawBucket() {
        let img = new Image();
        img.src = "src/scripts/half-sphere.png";
        img.onload = () => {
            this.ctx.clearRect(0, this.canvasHeight, this.canvasWidth+300, this.canvasHeight-100-this.canvasHeight);
            this.ctx.drawImage(img, this.canvasWidth/2, this.canvasHeight-100, 100, 100);
        }
        // this.ctx.clearRect(0, 0, this.width, this.height);
        // this.ctx.beginPath();
        // this.ctx.arc(this.width/2, this.height, 25, 0, Math.PI);
        // this.ctx.lineWidth = 5;
        // this.ctx.fillStyle = 'black';
        // this.ctx.fill();
        // this.ctx.strokeStyle = "black";
        // this.ctx.closePath();
        // this.ctx.stroke();
    }

    move(dir) {
        if (dir === "right") {
            this.canvasWidth += 100;
        } else if (dir === "left") {
            this.canvasWidth -= 100;
        }
        // this.drawBucket();
    }

    


}
export default Bucket;