/** @format */

import React from "react";
import "./index.scss";

export interface IIconProps {
    size?: number;
    color?: string;
    withLoadingText?: boolean;
    fontWeight?: string
}

const LoadingIcon: React.FunctionComponent<Required<IIconProps>> = (props) => {
    const { size, color, withLoadingText, fontWeight } = props;
    return (
        <div className="g-loading-icon-section">
            <div className="dot-spinner" style={{ "--button-color": color, "--uib-size": `${size}px` } as React.CSSProperties}>
                {Array.from({ length: 8 }).map((_item, index) => (
                    <div key={index} className="dot-spinner__dot"></div>
                ))}
            </div>
            {withLoadingText && (
                <div className="loading-text" style={{ "--button-color": color, "--font-weight": fontWeight } as React.CSSProperties}>
                    Please waiting . . .
                </div>
            )}
        </div>
    );
};

export default LoadingIcon;
