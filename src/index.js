import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = (window.innerWidth);
    canvas.height = (window.innerHeight);
    document.addEventListener("click", () => {
        let audioCtx = new AudioContext();
        let game = new Game(canvas, ctx, audioCtx);
        game.run();
    })

    // let game = new Game(canvas, ctx, audioCtx);
    // game.run();
})