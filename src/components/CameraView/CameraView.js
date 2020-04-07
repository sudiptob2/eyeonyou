import React, {useRef} from 'react';
import Detector from "./Detector"
import './CameraView.css'
import p5 from 'p5';
import ResizableRect from "react-resizable-rotatable-draggable";

const CameraView = () => {
    const videoRef = useRef(null);
    new p5(Detector, videoRef.current)

    return (<div className = "cameraview">
        <h1>
            <ResizableRect
                left={100}
                top={100}
                width={400}
                height={400}
                // onResizeStart={this.handleResizeStart}
                //onResize={this.handleResize}
                // onResizeEnd={this.handleUp}
                // onDragStart={this.handleDragStart}
                //onDrag={this.handleDrag}
                // onDragEnd={this.handleDragEnd}
            />
            <div ref={videoRef}>

            </div>
        </h1>
    </div>)
}

export default CameraView;