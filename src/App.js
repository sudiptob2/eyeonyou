import React, {useEffect} from 'react';
// import CameraLayout from "./components/CameraView/CameraLayout";
import IntroView from "./components/IntroView";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

    useEffect(() => {
        document.body.classList.add("background-color");

        return (() => {
            document.body.classList.remove("background-color")
        });
    });

    return (
        <div className="App">
            {/*<FrontView/>*/}
            <IntroView/>
        </div>
    );
}

export default App;
