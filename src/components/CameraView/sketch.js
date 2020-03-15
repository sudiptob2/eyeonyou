import * as ml5 from "ml5";

const sketch = (p) => {

    let textFont;
    let model;

    //  p.preload = () => {
    //      textFont = p.loadFont('./Roboto-Black.ttf');
    // }


    const modelReady = () => {
        console.log('Model is ready!!!');
        model.predict(gotResults);
    }

    const gotResults = (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log(results)
            // loop the inference by calling itself
            model.predict(gotResults);
        }
    }

    p.setup = () => {
        //p.createCanvas(600, 400, p.WEBGL);
        let capture = p.createCapture(p.VIDEO);
        capture.size(320, 240);
        model = ml5.imageClassifier('MobileNet', capture, modelReady);

        // p.textAlign(p.CENTER, p.CENTER);
        // p.textFont(textFont);
    };

    p.draw = () => {
         p.background(0);
         p.noStroke();
        // p.text("deep", 10, 10, 70, 80);
        // p.ellipse(50, 50, 80, 80);
        // p.push()
        //p.fill(255);
        // if (p.mouseIsPressed) {
        //     p.fill(0);
        // } else {
        //     p.fill(255);
        // }
        // p.ellipse(p.mouseX, p.mouseY, 80, 80);
        //p.line(15, 25, 70, 90);
        //p.textAlign(p.LEFT);
        // p.fill(255);
        // p.text('hl', 400, 300);
    };
};

export default sketch;