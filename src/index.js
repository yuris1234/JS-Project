// import Example from "./scripts/example";
import Bucket from "./scripts/bucket.js";
// const audioContext = new audioContext();

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = myCanvas.getContext('2d');
    canvas.width = (window.innerWidth);
    canvas.height = (window.innerHeight);

    let bucket = new Bucket(canvas.width, canvas.height, ctx);
    bucket.drawBucket();

    document.addEventListener("keydown", (e) => {
        handleArrowKey(e);
        
        // handleArrowKey(e);
        // handleArrowKey(e);
    })

    function handleArrowKey(e) {
        switch (e.key) {
            case "ArrowRight":
                bucket.move("right");
                break;
            case "ArrowLeft":
                bucket.move("left");
                break;
            default:
                return;
        }
        requestAnimationFrame(bucket.drawBucket());
    }
})