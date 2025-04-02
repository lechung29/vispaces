/** @format */

import React from "react";
import "./index.scss";
import { IconButton, IconButtonProps } from "@radix-ui/themes";
import { classNames } from "@/utils";

export const defaultIconStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    color: "var(--primary-icon-color)"
}

export interface IIconButtonProps extends Omit<IconButtonProps, "highContrast" | "color"> {
    iconElement: JSX.Element
}

const IconButtonView: React.FunctionComponent<IIconButtonProps> = (props) => {
    const { 
        iconElement, 
        variant = "soft",
        size = "2",
        radius = "large",
        className,
        ...rest
    } = props
    return <IconButton
        {...rest}
        className={classNames("g-icon-button-wrapper", className)}
        size={size}
        variant={variant}
        radius={radius}
    >
        {iconElement}
    </IconButton>
};

export {
    IconButtonView as IconButton
}
