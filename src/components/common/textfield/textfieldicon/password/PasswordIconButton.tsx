/** @format */

import { defaultIconStyle, IconButton, IIconButtonProps } from "@/components";
import { useControllableState } from "@/hooks/useControlLabelState";
import { GoEye, GoEyeClosed } from "react-icons/go";

export type PasswordIconButtonProps = Omit<IIconButtonProps, "iconElement" | "style"> & {
    showPassword?: boolean;
    onShowPasswordChange?: (value: boolean) => void;
};

export const PasswordIconButton = (props: PasswordIconButtonProps) => {
    const { showPassword, ...buttonProps } = props;

    const [internalShowPassword, setInternalShowPassword] = useControllableState<boolean>({
        value: showPassword,
        defaultValue: showPassword,
        onChange: (value) => props.onShowPasswordChange?.(value),
    });

    const Icon = internalShowPassword ? GoEyeClosed : GoEye;

    const handleOnClick: IIconButtonProps["onClick"] = (event) => {
        buttonProps.onClick?.(event);
        setInternalShowPassword(!internalShowPassword);
    };

    return <IconButton {...buttonProps} iconElement={<Icon style={defaultIconStyle} />} onClick={handleOnClick} />;
};
