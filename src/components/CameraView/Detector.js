import * as ml5 from "ml5";
import demo from "./loading.gif";

const Detector = (p) => {
    let faceApi;
    const cameraOptions = {
        audio: false,
        video: {
            facingMode: "user",
        },
    };
    let isLoading = true;
    let gif_loadImg, gif_createImg;
    let cnvPosX, cnvPosY;
    const faceOptions = {
        withLandmarks: true,
        withExpressions: false,
        withDescriptors: false,
    };

    p.setup = () => {
        const cnv = p.createCanvas(360, 270);
        gif_createImg = p.createImg(demo);
        gif_loadImg = p.loadImage(demo);
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
        if (isLoading) {
            p.image(gif_loadImg, cnvPosX + 60, cnvPosY + 25);
            gif_createImg.position(cnvPosX + 60, cnvPosY + 25);
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
        p.rect(0 + 40, 0 + 40, p.width - 80, p.height - 80);

        if (result) {
            if (result.length > 0) {
                drawBox(result);
            }
        }
        faceApi.detect(gotFaces);
    };

    const drawBox = (detections) => {
        for (let i = 0; i < detections.length; i++) {
            const alignedRect = detections[i].alignedRect;
            const x = alignedRect._box._x;
            const y = alignedRect._box._y;
            const boxWidth = alignedRect._box._width;
            const boxHeight = alignedRect._box._height;

            p.noFill();
            p.stroke(161, 95, 251);
            p.strokeWeight(2);
            p.rect(x, y, boxWidth, boxHeight);
        }
    };
};

export default Detector;
