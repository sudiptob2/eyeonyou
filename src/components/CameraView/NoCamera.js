import React, { useRef } from "react";
import Draggable, {
    handleDrag,
    handleStart,
    handleStop,
} from "react-draggable";
import Logo from "../IntroView/Logo";
import "../IntroView/IntroView.css";

const NoCamera = () => {
    return (
        <div className="titleText text-center">
            <Draggable
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[50, 50]}
                scale={1}
                onStart={handleStart}
                onDrag={handleDrag}
                onStop={handleStop}
            >
                <div>
                    <Logo />
                </div>
            </Draggable>
        </div>
    );
};

export default NoCamera;
