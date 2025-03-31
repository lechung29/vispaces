/** @format */

import { classNames, commonTextFieldAnimationProps } from "@/utils";
import { rem, TextInput, TextInputProps } from "@mantine/core";
import React from "react";
import { MdSearch } from "react-icons/md";
import "./index.scss";
import { motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useControllableState } from "@/hooks/useControlLabelState";
import { IAction } from "@/types/Function";

export interface ITextInputProps extends Omit<TextInputProps, "onChange"> {
    haveSearchIcon?: boolean;
    withAnimation?: boolean;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: IAction
}

const TextField: React.FunctionComponent<ITextInputProps> = (props) => {
    const { 
        className, 
        size = "xl", 
        radius = "md", 
        mt = "lg",
        variant = "filled", 
        leftSection, 
        rightSection,
        leftSectionPointerEvents,
        rightSectionPointerEvents,
        haveSearchIcon = false, 
        withAnimation = false, 
        value,
        onChange,
        onClear,
        ...rest 
    } = props;

    const [internalInputValue, setInternalInputValue] = useControllableState<string>({
        value: String(value),
        defaultValue: String(value),
        onChange: (value, event) => {
            onChange?.(value, event);
        }
    })

    const inputLeftSection = React.useMemo(() => {
        return haveSearchIcon ? <MdSearch style={{ width: rem(20), height: rem(20) }} /> : leftSection;
    }, []);

    const inputRightSection = React.useMemo(() => {
        return (internalInputValue && onClear) 
            ? <IoCloseCircleSharp onClick={onClear} style={{ width: rem(16), height: rem(16) }} /> 
            : rightSection
    }, [internalInputValue, onClear])

    const TextInputComponent = withAnimation ? motion(TextInput as any) : TextInput;

    const getTextInputProps = () => {
        const animationProps = withAnimation ? commonTextFieldAnimationProps : {}
        return {
            ...rest,
            ...animationProps,
            className: classNames("text-input-wrapper", className),
            size: size,
            radius: radius,
            mt: mt,
            value: internalInputValue,
            onChange: (event) => {
                setInternalInputValue(event.target.value, event)
            },
            leftSection: inputLeftSection,
            rightSection: inputRightSection,
            rightSectionPointerEvents: rightSectionPointerEvents || "all",
        };
    };
    
    return (
        <TextInputComponent
            {...getTextInputProps()}
        />
    );
};

export {
    TextField
}
