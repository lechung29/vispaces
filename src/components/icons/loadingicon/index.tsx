/** @format */

import React from "react";
import "./index.scss";
import { Text } from "@/components/common";

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
                <Text 
                    className="loading-text" 
                    displayText="Please waiting . . ."
                    as="p" 
                    style={{ 
                        "--button-color": color, 
                        "--font-weight": fontWeight 
                    } as React.CSSProperties} 
                />
            )}
        </div>
    );
};

export default LoadingIcon;
