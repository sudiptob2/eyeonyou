import soundFile from "./soundfile.mp3";

let audio = new Audio(soundFile);

const SOUND_KEY = "mute";

const getSoundOption = () => {
    // If we have storage permission or not
    if (typeof Storage !== "undefined") {
        //If we have the file
        if (localStorage.getItem(SOUND_KEY)) {
            //returns boolean
            return localStorage.getItem(SOUND_KEY) == "true";
        } else {
            localStorage.setItem(SOUND_KEY, "true");
        }
    } else {
        console.log("Sorry! No Web Storage support..");
    }
    return true;
};
const setSoundOption = (e) => {
    if (typeof Storage !== "undefined") {
        // Doesn't matter if you put string or boolean in local storage
        // It's always going to be saved as string.
        localStorage.setItem(SOUND_KEY, e);
    }
};
const playAudio = () => {
    if (getSoundOption()) {
        audio.play();
    }
};

const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
};

export { playAudio, stopAudio, getSoundOption, setSoundOption };
