/** @format */

import { IoCloseCircleSharp } from "react-icons/io5";
import { defaultIconStyle, IconButton, IIconButtonProps } from "@/components";

export type PasswordIconButtonProps = Omit<IIconButtonProps, "iconElement" | "style" | "ref"> & {
    showClear?: boolean;
};

export const ClearIconButton = (props: PasswordIconButtonProps) => {
    const { showClear, onClick, ...buttonProps } = props;

    const handleOnClick: IIconButtonProps["onClick"] = (event) => {
        onClick?.(event);
    };

    return showClear && <IconButton {...buttonProps} iconElement={<IoCloseCircleSharp style={defaultIconStyle} />} onClick={handleOnClick} />;
};
