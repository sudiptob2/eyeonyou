import soundFile from "./soundfile.mp3";

let audio = new Audio(soundFile);

const SOUND_KEY = "eoy_sound";

const getSoundOption = () => {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem(SOUND_KEY)) {
           return localStorage.getItem(SOUND_KEY)
        } else {
            localStorage.setItem(SOUND_KEY, 'true');
        }
    } else {
        console.log("Sorry! No Web Storage support..")
    }
    return true
};
const setSoundOption = (e) => {
    if (typeof(Storage) !== "undefined") {
        if (!localStorage.getItem(SOUND_KEY)) {
            localStorage.setItem(SOUND_KEY, e);
        } else {

        }
    } else {
        console.log("Sorry! No Web Storage support..")
    }
}
const playAudio = () => {
    if (getSoundOption() === 'true') {
        audio.play();
    }
}

const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
}


export {playAudio, stopAudio, getSoundOption, setSoundOption};

