import * as ml5 from "ml5";
import muteIcon from "../../assets/images/interface.svg";
import muteIconRed from "../../assets/images/interface_red.svg";
import demo from "../../assets/images/loading.gif";
import powerIcon from "../../assets/images/power.svg";
import {
    getSoundOption,
    playAudio,
    setSoundOption,
    stopAudio,
} from "./SoundNotification";

const Detector = (p) => {
    let cnv;
    let faceApi;
    let cnvPosX, cnvPosY;
    let startBtn,
        muteBtn,
        isCreated = false;
    const ratio = 360 / 270;
    let isLoading = true;
    let gif_createImg;
    let consistencyArr = [];

    const cameraOptions = {
        audio: false,
        video: {
            facingMode: "user",
        },
    };
    const faceOptions = {
        withLandmarks: true,
        withExpressions: false,
        withDescriptors: false,
    };

    p.setup = () => {
        cnv = p.createCanvas(350 * ratio, 350);
        //Loader animation code
        gif_createImg = p.createImg(demo);
        gif_createImg.size(100, 100);
        //gif_loadImg = p.loadImage(demo);

        // Camera video code
        p.video = p.createCapture(cameraOptions);
        p.video.size(p.width, p.height);
        faceApi = ml5.faceApi(p.video, faceOptions, faceReady);
        // Cauterize the cnv
        cnvPosX = (p.windowWidth - p.width) / 2;
        cnvPosY = (p.windowHeight - p.height) / 2;
        cnv.position(cnvPosX, cnvPosY + cnvPosY / 5);
        p.video.hide();
    };

    p.draw = () => {
        // Displaying the loader
        if (isLoading) {
            gif_createImg.position(cnvPosX + 135 * ratio, cnvPosY + 80 * ratio);
        } else {
            gif_createImg.hide();
            createButtons();
        }
    };

    const createButtons = () => {
        if (isCreated === false) {
            let col = p.color(25, 23, 200, 0);

            startBtn = p.createButton(
                `<img src= ${powerIcon} alt="mute"  height="32" width="32"/>`
            );
            startBtn.position(cnvPosX, cnvPosY + cnvPosY / 5);
            startBtn.mousePressed(openWindow);
            startBtn.style("background-color", col);
            startBtn.style("font-size", "10px");
            startBtn.style("border", "none");
            startBtn.style("outline", "none");

            muteBtn = p.createButton("Sound control");

            muteBtn.position(cnvPosX, cnvPosY + cnvPosY / 5 + 40);
            muteBtn.mousePressed(toggleSoundAlert);
            muteBtn.style("background-color", col);
            muteBtn.style("font-size", "10px");
            muteBtn.style("border", "none");
            muteBtn.style("outline", "none");

            if (getSoundOption()) {
                muteBtn.html(
                    `<img src= ${muteIcon} alt="mute"  height="32" width="32"/>`
                );
            } else {
                muteBtn.html(
                    `<img src= ${muteIconRed} alt="mute"  height="32" width="32"/>`
                );
            }

            isCreated = true;
        }
    };

    const toggleSoundAlert = () => {
        setSoundOption(!getSoundOption());
        if (getSoundOption()) {
            muteBtn.html(
                `<img src= ${muteIcon} alt="mute"  height="32" width="32"/>`
            );
        } else {
            muteBtn.html(
                `<img src= ${muteIconRed} alt="mute"  height="32" width="32"/>`
            );
        }
        console.log(getSoundOption());
    };

    const openWindow = () => {
        let height = 220;
        let width = 250;
        let top = window.innerHeight - height;
        let left = window.innerWidth - (width + 10);

        window.open(
            window.location.origin + "/cam",
            "_blank",
            `toolbar=0,location=0,menubar=0 resizable=no,left=${left},top=${top} width=${width},height=${height}`
        );
    };
    const faceReady = () => {
        faceApi.detect(gotFaces);
        isLoading = false;
        //console.log("Camera Loading complete");
    };

    let gotFaces = (error, result) => {
        if (error) {
            //console.log(error);
            return;
        }

        //console.log(result);
        p.background(255);
        p.image(p.video, 0, 0, p.width, p.height);
        //Big rectangle
        const R1 = {
            x: 0 + 80,
            y: 0 + 40,
            w: p.width - 160,
            h: p.height - 60,
        };
        p.stroke("red");
        p.strokeWeight(3);
        p.rect(R1.x, R1.y, R1.w, R1.h);

        //Getting small rectangle
        let R2;
        if (result) {
            if (result.length > 0) {
                R2 = drawBox(result);
            }
        }
        faceApi.detect(gotFaces);

        // Collision detection:
        if (R2) {
            p.stroke(0, 255, 0);
            p.strokeWeight(1.5);
            p.textSize(15);
            p.text("We got you!", R1.x, R1.y - 5);
            consistencyArr = [];

            if (
                R2.x + R2.w < R1.x + R1.w &&
                R2.x > R1.x &&
                R2.y > R1.y &&
                R2.y + R2.h < R1.y + R1.h
            ) {
                //console.log("Inside of R1");
                document.body.classList.remove("background-color-alter");
                stopAudio();
                p.stroke(0, 255, 0);
                p.strokeWeight(1.5);
                p.textSize(15);
                p.text("Inside of R1", R2.x, R2.y - 5);
            } else {
                console.log("Outside of R1");
                document.body.classList.add("background-color-alter");
                playAudio();
                p.stroke("red");
                p.strokeWeight(1.5);
                p.textSize(15);
                p.text("Outside of R1", R2.x, R2.y - 5);
            }
        } else {
            p.stroke("red");
            p.strokeWeight(1.5);
            p.textSize(15);
            p.text("No Face", R1.x, R1.y - 5);
            console.log("No Face");
            consistencyArr.push(0);
            if (consistencyArr.length > 20) {
                document.body.classList.add("background-color-alter");
                playAudio();
            }
        }
    };

    const drawBox = (detections) => {
        for (let i = 0; i < detections.length; i++) {
            const alignedRect = detections[i].alignedRect;
            const x = alignedRect._box._x;
            const y = alignedRect._box._y;
            const boxWidth = alignedRect._box._width;
            const boxHeight = alignedRect._box._height;

            p.noFill();
            p.stroke(0, 255, 0);
            p.strokeWeight(2);
            p.rect(x, y, boxWidth, boxHeight);

            let boxDimension = {
                x: x,
                y: y,
                w: boxWidth,
                h: boxHeight,
            };
            return boxDimension;
        }
    };
};

export default Detector;
