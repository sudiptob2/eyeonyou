import React, {useState} from 'react';
import Logo from "./Logo";
import './IntroView.css'

const IntroView = () => {
    const letsDoItClick = (e) => {
        setClicked(true);
    };

    const checkCamera = () => {
        navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);

        navigator.getMedia({video: true}, function () {
            console.log("true");
            return true;
        }, function () {
            console.log("false");
            return false;
        });
    };
    const [clicked, setClicked] = useState(false);

    return (<div className="introView container">
        {!clicked && <div>
            <div style={{}} className="logo row justify-content-center p-2">
                <Logo/>
            </div>
            <div className="title row justify-content-center title-custom-padding">
                <h1 className="titleText text-center">Stop procrastinating, start producing!</h1>
            </div>
            <div className="row justify-content-center subtitle-custom-padding">
                <p className="subTitleText">virtual coworking with eyeonyou significantly improves your
                    productivity.</p>
            </div>

            <div className="start row justify-content-center p-2">
                <button type="button"
                        onClick={letsDoItClick}
                        className="btn startButton startButtonBorder">
                    Try EyeOnYou ->
                </button>
            </div>
            <div className="infoText text-center row justify-content-center p-2">
                <p className="textDetails">
                    Built with TensorFlow.js + p5.js + React.js.
                    Learn more about <a className="link" href="#">how it works.</a>
                </p>

            </div>
        </div>
        }
        {clicked &&
        <div>
            {checkCamera()}
            {/*<CameraView/>*/}
        </div>
        }
    </div>)
};

export default IntroView;