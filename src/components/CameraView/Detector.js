import * as ml5 from "ml5";
import demo from "./loading.gif";
import soundFile from "./soundfile.mp3";

const Detector = (p) => {
    let faceApi;
    let cnvPosX, cnvPosY;
    const ratio = 360 / 270;
    let isLoading = true;
    let audio = new Audio(soundFile);
    let gif_loadImg, gif_createImg;
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
        const cnv = p.createCanvas(350 * ratio, 350);
        //Loader animation code
        gif_createImg = p.createImg(demo);
        gif_loadImg = p.loadImage(demo);

        // Camera video code
        p.video = p.createCapture(cameraOptions);
        p.video.size(p.width, p.height);
        faceApi = ml5.faceApi(p.video, faceOptions, faceReady);
        //Centerize the cnv
        cnvPosX = (p.windowWidth - p.width) / 2;
        cnvPosY = (p.windowHeight - p.height) / 2;
        cnv.position(cnvPosX, cnvPosY);

        p.video.hide();
    };

    p.draw = () => {
        // Displaying the loader
        if (isLoading) {
            gif_createImg.position(cnvPosX + 90 * ratio, cnvPosY + 25 * ratio);
        } else {
            gif_createImg.hide();
        }
    };

    const faceReady = () => {
        faceApi.detect(gotFaces);
        isLoading = false;
        console.log("Camera Loading complete");
    };

    let gotFaces = (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log(result);
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
                console.log("Inside of R1");
                document.body.classList.remove("background-color-alter");
                audio.pause();
                audio.currentTime = 0;
                p.stroke(0, 255, 0);
                p.strokeWeight(1.5);
                p.textSize(15);
                p.text("Inside of R1", R2.x, R2.y - 5);
            } else {
                console.log("Outside of R1");
                document.body.classList.add("background-color-alter");
                audio.play();
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
            if (consistencyArr.length > 8) {
                document.body.classList.add("background-color-alter");
                audio.play();
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
