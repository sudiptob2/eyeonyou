import React, { useEffect } from "react";
import IntroView from "./components/IntroView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterPage from "./components/FooterView/FooterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CameraView from "./components/CameraView/CameraView";
import NoCamera from "./components/CameraView/NoCamera";

function App() {
    useEffect(() => {
        document.body.classList.add("background-color");
        return () => {
            document.body.classList.remove("background-color");
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="content-wrap">
                    <Route path="/" exact component={IntroView} />
                    <Route path="/cam" component={CameraView} />
                    <Route path="/nocam" component={NoCamera} />
                </div>
                <FooterPage />
            </div>
        </Router>
    );
}

export default App;
