/** @format */

import { Avatar, AvatarProps } from "@radix-ui/themes";
import React from "react";
import { Tooltip } from "../tooltip";
import { classNames } from "@/utils";

export type IAvatarProps = Omit<AvatarProps, "highContrast" | "fallback"> & {
    avatarName: string;
    withTooltip?: boolean;
};

const AvatarView: React.FunctionComponent<IAvatarProps> = (props) => {
    const { 
        avatarName, 
        withTooltip,
        className,
        variant = "soft",
        size = "3",
        radius = "full",
        ...rest
    } = props;
    return withTooltip
        ? <Tooltip
            side="top"
            tooltipContent={avatarName} 
            element={<Avatar 
                {...rest}
                className={classNames("cursor-pointer", className )}
                variant={variant}
                size={size}
                radius={radius}
                fallback={<div>{avatarName}</div>}
            />}
        /> : <Avatar 
            {...rest}
            className={classNames("cursor-pointer", className )}
            variant={variant}
            size={size}
            radius={radius}
            fallback={<div>{avatarName}</div>}
        />

};

export { AvatarView as Avatar };
