import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById('game-canvas');
    const gameCtx = gameCanvas.getContext('2d');
    gameCanvas.width = (window.innerWidth - window.innerWidth/3);
    gameCanvas.height = (window.innerHeight - window.innerHeight/4);

    const sequenceCanvas = document.getElementById('sequence-canvas');
    const sequenceCtx = sequenceCanvas.getContext('2d');
    sequenceCanvas.width = (window.innerWidth - window.innerWidth/3);
    sequenceCanvas.height = (window.innerHeight/5);

    document.addEventListener("click", () => {
        let audioCtx = new AudioContext();
        let game = new Game(gameCanvas, gameCtx, audioCtx, sequenceCanvas, sequenceCtx);
        game.run();
    })
})