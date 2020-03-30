import React, {useState} from 'react';
import CameraView from '../CameraView';

const FrontView = () => {
    const [getStart, setStart] = useState(false);

    const clickStart = () => {
        setStart(true);
    }

    return (<div className="frontView">
        {!getStart && <button onClick={clickStart} className="startButton">START</button>}
        {getStart && <CameraView/>}
    </div>)
}

export default FrontView;