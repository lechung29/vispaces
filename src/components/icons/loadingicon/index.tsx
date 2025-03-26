import React from "react";
import "./index.scss";

export interface IIconProps {
    size?: number;
    color?: string;
    withLoadingText?: boolean;
}

const LoadingIcon: React.FunctionComponent<IIconProps> = (props) => {
    const { size, color, withLoadingText = false } = props;
    return (
        <div className="g-loading-icon-section"> 
            <div className="dot-spinner" style={{ "--uib-color": color, "--uib-size": `${size}px` } as React.CSSProperties}>
                {Array.from({length: 8}).map((_item, index) => (
                    <div key={index} className="dot-spinner__dot"></div>
                ))}
            </div>
            {withLoadingText && <div className="loading-text" style={{"--uib-color": color } as React.CSSProperties}>Please waiting . . .</div>}
        </div>
    );
};

export default LoadingIcon;
