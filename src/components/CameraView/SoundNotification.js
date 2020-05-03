import soundFile from "./soundfile.mp3";

let audio = new Audio(soundFile);

const playAudio = () => {
    audio.play();
}

const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
}


export {playAudio, stopAudio};

