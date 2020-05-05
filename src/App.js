import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CameraView from "./components/CameraView/CameraView";
import FooterPage from "./components/FooterView/FooterPage";
import IntroView from "./components/IntroView";

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
                </div>
                <FooterPage />
            </div>
        </Router>
    );
}

export default App;
