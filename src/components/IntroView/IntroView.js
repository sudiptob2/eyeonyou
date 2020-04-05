import React, {useState} from 'react';
import { Link } from 'react-router';
import Logo from "./Logo";
import './IntroView.css'
import CameraView from "../CameraView";
import FooterPage from "../FooterView/FooterPage"

const IntroView = () => {
    const letsDoItClick = (e) => {
        setClicked(true);
    };

    const [clicked, setClicked] = useState(false);

    return (<div className="introView container">
        { !clicked && <div>
            <div style={{}} className="logo row justify-content-center p-2">
                <Logo/>
            </div>
            <div className="title row justify-content-center title-custom-padding">
                <h1 className="titleText text-center">Stop procrastinating, start producing!</h1>
            </div>
            <div className="row justify-content-center subtitle-custom-padding">
                <p className="subTitleText">virtual coworking with eyeonyou significantly improves your productivity.</p>
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
                    Learn more about <a className = "link" href="#">how it works.</a>
                </p>
                
            </div>
        </div>
        }
        {clicked && <CameraView/>}
    </div>)
};

export default IntroView;