/** @format */

import { classNames, commonAnimationProps } from "@/utils";
import { rem, TextInput, TextInputProps } from "@mantine/core";
import React from "react";
import { MdSearch } from "react-icons/md";
import "./index.scss";
import { motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useControllableState } from "@/hooks/useControlLabelState";

export interface ITextInputProps extends Omit<TextInputProps, "onChange"> {
    haveSearchIcon?: boolean;
    withAnimation?: boolean;
    withClearButton?: boolean;
    onChange(value: string, event: React.ChangeEventHandler<HTMLInputElement>);
}

const TextInputView: React.FunctionComponent<ITextInputProps> = (props) => {
    const { 
        className, 
        size, 
        radius, 
        mt, 
        leftSection, 
        rightSection,
        leftSectionPointerEvents,
        rightSectionPointerEvents,
        haveSearchIcon = false, 
        withAnimation = false, 
        withClearButton = false,
        value,
        onChange,
        ...rest 
    } = props;

    const [internalInputValue, setInternalInputValue] = useControllableState<string>({
        value: String(value),
        defaultValue: String(value),
        onChange: (value, event) => {
            onChange(value, event);
        }
    })

    const inputLeftSection = React.useMemo(() => {
        return haveSearchIcon ? <MdSearch style={{ width: rem(20), height: rem(20) }} /> : leftSection;
    }, []);

    const inputRightSection = React.useMemo(() => {
        return (withClearButton) ? <IoCloseCircleSharp /> : rightSection
    }, [])

    const TextInputComponent = withAnimation ? motion(TextInput as any) : TextInput;
    const getTextInputProps = () => {
        const animationProps = withAnimation ? commonAnimationProps : {}
        return {
            ...rest,
            ...animationProps,
            className: classNames("text-input-wrapper", className),
            size: size || "xl",
            radius: radius || "md",
            mt: mt || "lg",
            value: internalInputValue,
            onChange: setInternalInputValue,
            leftSection: inputLeftSection,
            inputRightSection: inputRightSection,
            rightSectionPointerEvents: rightSectionPointerEvents || "all",
        };
    };
    
    return (
        <TextInputComponent
            {...getTextInputProps()}
        />
    );
};

export { TextInputView as TextInput };
