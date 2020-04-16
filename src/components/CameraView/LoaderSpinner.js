import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = (props) => {
    return (
        <Loader
            type="Audio"
            color="#94dfb4"
            height={200}
            width={200}
            timeout={10000} //10 secs
        />
    );
};
export default LoaderSpinner;
