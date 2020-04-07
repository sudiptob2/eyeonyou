import * as ml5 from "ml5";

const Detector = (p) => {

    let faceApi;
    const cameraOptions = {
        audio: false,
        video: {
            facingMode: "user"
        }
    };

    const faceOptions = {
        withLandmarks: true,
        withExpressions: false,
        withDescriptors: false
    };

    p.setup = () => {
        const cnv = p.createCanvas(360, 270);
        p.video = p.createCapture(cameraOptions);
        p.video.size(p.width, p.height);
        faceApi = ml5.faceApi(p.video, faceOptions, faceReady);
        cnv.position(200,200)
        p.video.hide()
        
    };

    p.draw = () => {

    };

    const faceReady = () => {
        faceApi.detect(gotFaces);
    };

    let gotFaces = (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(result);
        p.background(255);
        p.image(p.video, 0, 0, p.width, p.height);
        p.rect(0+40, 0+40, p.width-80, p.height-80);

        if (result) {
            if (result.length > 0) {
                drawBox(result)
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
    }
};

export default Detector;