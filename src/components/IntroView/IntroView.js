import React from 'react';
import Logo from "./Logo";
import './IntroView.css'

const IntroView = () => {
    return (<div className="introView container">
        <div style={{}} className="logo row justify-content-center p-2">
            <Logo/>
        </div>
        <div className="title row justify-content-center p-2">
            <h1 className="titleText text-center">Eye On You</h1>
        </div>
        <div className="start row justify-content-center p-2">
            <button type="button" className="btn startButton startButtonBorder">Lets do it -></button>
        </div>
        <div className="infoText text-center row justify-content-center p-2">
            <p className="textDetails">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>)
};

export default IntroView;