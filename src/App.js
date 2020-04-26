import React, { useEffect } from "react";
import IntroView from "./components/IntroView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterPage from "./components/FooterView/FooterPage";

function App() {
    useEffect(() => {
        document.body.classList.add("background-color");
        return () => {
            document.body.classList.remove("background-color");
        };
    }, []);

    return (
        <div className="App">
            <div className="content-wrap">
                <IntroView />
            </div>
            <FooterPage />
        </div>
    );
}

export default App;
