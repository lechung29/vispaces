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

export const bigIconStyle: React.CSSProperties = {
    width: "28px",
    height: "28px",
    color: "var(--primary-icon-color)"
}

export interface IIconButtonRef {}

export interface IIconButtonProps extends Omit<IconButtonProps, "highContrast" | "color"> {
    iconElement: JSX.Element;
    ref: React.ForwardedRef<IIconButtonRef>
}

const IconButtonView = React.forwardRef<IIconButtonRef, IIconButtonProps>((props, _ref) => {
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
})

export {
    IconButtonView as IconButton
}
