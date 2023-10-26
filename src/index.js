import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById('game-canvas');
    const gameCtx = gameCanvas.getContext('2d');
    gameCanvas.width = (window.innerWidth - window.innerWidth/2.5);
    gameCanvas.height = (window.innerHeight - window.innerHeight/4);

    const sequenceCanvas = document.getElementById('sequence-canvas');
    const sequenceCtx = sequenceCanvas.getContext('2d');
    sequenceCanvas.width = (window.innerWidth - window.innerWidth/2);
    sequenceCanvas.height = (window.innerHeight/5);

    gameCanvas.addEventListener("click", () => {
        let audioCtx = new AudioContext();
        let game = new Game(gameCanvas, gameCtx, audioCtx, sequenceCanvas, sequenceCtx);
        game.run();
    })

    let volumeSlider = document.querySelector("input[name='volume']");
    let previousVolume = volumeSlider.value;
    let muteButton = document.querySelector(".mute");
    let unmuteButton = document.querySelector(".unmute");
    muteButton.addEventListener("click", (e) => {
        // previousVolume = volumeSlider.value;
        muteButton.className = "mute hidden";
        unmuteButton.className = "unmute";
        volumeSlider.value = 0; 

    })
    unmuteButton.addEventListener("click", (e) => {
        unmuteButton.className = "unmute hidden";
        muteButton.className = "mute";
        volumeSlider.value = previousVolume;
    })

})