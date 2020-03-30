import React, {useEffect, useState} from 'react';

const Logo = () => {
    const eyeColor = "#F5F5F5";

    const arrowDirections = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    const [getXAdd, setXAdd] = useState(0);
    const [getYAdd, setYAdd] = useState(0);

    const eyeRadius = 14;
    const eyeLeft = {
        cx: 42.887,
        cy: 259.405
    };
    const eyeRight = {
        cx: 87.627,
        cy: 259.436,
    };

    const eyeBallRadius = 4;

    const eyeBallLeft = {
        cx: getXAdd + 42.683,
        cy: getYAdd + 260.914
    };

    const eyeBallRight = {
        cx: getXAdd + 87.423,
        cy: getYAdd + 260.945
    };


    const act = () => {
        const selection = arrowDirections[~~(Math.random() * arrowDirections.length)];
        onArrowAction(selection);
    }

    useEffect(() => {
        setInterval(() => act(), 1000)
    }, []);

    const radiusBoundary = (eyeRadius / 2) - 1;
    const onArrowAction = (e) => {
        switch (e) {
            case arrowDirections[0]:
                if (getXAdd > 0 || Math.abs(getXAdd) <= radiusBoundary) {
                    setXAdd(getXAdd - 1);
                }
                break;
            case arrowDirections[1]:
                if (getXAdd < 0 || Math.abs(getXAdd) <= radiusBoundary) {
                    setXAdd(getXAdd + 1);
                }
                break;
            case arrowDirections[2]:
                if (getYAdd > 0 || Math.abs(getYAdd) <= radiusBoundary) {
                    setYAdd(getYAdd - 1);
                }
                break;
            case arrowDirections[3]:
                if (getYAdd < 0 || Math.abs(getYAdd) <= radiusBoundary) {
                    setYAdd(getYAdd + 1);
                }
                break;
            default:
                return;
        }
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="505.894"
            height="297.894"
            version="1.1"
            viewBox="0 0 133.851 78.818"
        >
            <g
                fillOpacity="1"
                stroke={eyeColor}
                strokeDasharray="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="23.7"
                strokeOpacity="1"
                paintOrder="normal"
                transform="translate(0 -218.182)"
            >
                <rect
                    width="125.677"
                    height="70.644"
                    x="4.087"
                    y="222.269"
                    fill="none"
                    strokeWidth="8.174"
                    ry="24.739"
                />
                <circle
                    className="eyeLeft"
                    cx={eyeLeft.cx}
                    cy={eyeLeft.cy}
                    r={eyeRadius}
                    fill="none"
                    strokeWidth="2.592"
                />
                <circle
                    className="eyeBallLeft"
                    cx={eyeBallLeft.cx}
                    cy={eyeBallLeft.cy}
                    r={eyeBallRadius}
                    fill={eyeColor}
                    strokeWidth="1.496"
                />
                <circle
                    className="eyeRight"
                    cx={eyeRight.cx}
                    cy={eyeRight.cy}
                    r={eyeRadius}
                    fill="none"
                    strokeWidth="2.592"
                />
                <circle
                    className="eyeBallRight"
                    cx={eyeBallRight.cx}
                    cy={eyeBallRight.cy}
                    r={eyeBallRadius}
                    fill={eyeColor}
                    strokeWidth="1.496"
                />
            </g>
        </svg>
    );
};

export default Logo;