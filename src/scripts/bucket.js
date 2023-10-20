class Bucket {
    constructor(width, height, ctx) {
        debugger
        // this.dimensions = [width, height]
        this.width = width;
        this.height = height;
        this.ctx = ctx;
    }

    drawBucket() {
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
            this.width += 100;
        } else if (dir === "left") {
            this.width -= 100;
        }
        // this.drawBucket();
    }

    


}
export default Bucket;