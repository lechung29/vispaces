/** @format */

import { classNames } from "@/utils";
import React from "react";
import { MdSearch } from "react-icons/md";
import "./index.scss";
import { useControllableState } from "@/hooks/useControlLabelState";
import { IAction } from "@/types/Function";
import { Text, TextField } from "@radix-ui/themes";
import { RootProps } from "@radix-ui/themes/components/text-field";
import { defaultIconStyle } from "../iconbutton";

export interface ITextInputProps extends Omit<RootProps, "onChange" | "value" | "autoComplete"> {
    haveSearchIcon?: boolean;
    leftSection?: JSX.Element;
    rightSection?: JSX.Element;
    value?: string;
    errorMessage?: string;
    errorMessageClassName?: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: IAction;
}

const TextFieldView: React.FunctionComponent<ITextInputProps> = (props) => {
    const { 
        className, 
        size = "3", 
        radius = "full", 
        variant = "soft", 
        haveSearchIcon = false, 
        leftSection, 
        rightSection, 
        value, 
        errorMessage, 
        errorMessageClassName, 
        onChange, 
        onClear, 
        ...rest 
    } = props;

    const [internalInputValue, setInternalInputValue] = useControllableState<string>({
        value: value,
        defaultValue: value,
        onChange: (value, event) => {
            onChange?.(value, event);
        },
    });

    const inputLeftSection = React.useMemo(() => {
        return (haveSearchIcon || leftSection) 
            ? haveSearchIcon 
                ? <MdSearch style={defaultIconStyle} />
                : leftSection
            : <></>;
    }, [leftSection, haveSearchIcon]);

    return (
        <div className="g-text-input-wrapper">
            <TextField.Root
                {...rest}
                autoComplete="off"
                className={classNames("text-input-section", className)}
                size={size}
                radius={radius}
                variant={variant}
                value={internalInputValue}
                onChange={(event) => {
                    setInternalInputValue(event.target.value, event);
                }}
            >
                <TextField.Slot side="left">{inputLeftSection}</TextField.Slot>
                <TextField.Slot side="right">{rightSection}</TextField.Slot>
            </TextField.Root>
            {errorMessage && (
                <Text 
                    className={classNames("errorMessage-input-section", errorMessageClassName)}
                    as="p" 
                    wrap="wrap" 
                    trim="start" 
                    tabIndex={0} 
                    truncate={true}
                >
                    {errorMessage}
                </Text>
            )}
        </div>
    );
};

// const TextFieldViewZ: React.FunctionComponent<ITextInputProps> = (props) => {
//     const { 
//         className, 
//         size = "3", 
//         radius = "full", 
//         variant = "soft", 
//         haveSearchIcon = false, 
//         leftSection, 
//         rightSection, 
//         value, 
//         errorMessage, 
//         errorMessageClassName, 
//         onChange, 
//         onClear, 
//         ...rest 
//     } = props;

//     const [internalInputValue, setInternalInputValue] = useControllableState<string>({
//         value: value,
//         defaultValue: value,
//         onChange: (value, event) => {
//             onChange?.(value, event);
//         },
//     });

//     return (
//         <div className="g-text-input-wrapper">
//             <TextField.Root
//                 {...rest}
//                 autoComplete="off"
//                 className={classNames("text-input-section", className)}
//                 size={size}
//                 radius={radius}
//                 variant={variant}
//                 value={internalInputValue}
//                 onChange={(event) => {
//                     setInternalInputValue(event.target.value, event);
//                 }}
//             >
//                 <TextField.Slot side="left">{leftSection}</TextField.Slot>
//                 <TextField.Slot side="right">{rightSection}</TextField.Slot>
//             </TextField.Root>
//             {errorMessage && (
//                 <Text 
//                     className={classNames("errorMessage-input-section", errorMessageClassName)}
//                     as="p" 
//                     wrap="wrap" 
//                     trim="start" 
//                     tabIndex={0} 
//                     truncate={true}
//                 >
//                     {errorMessage}
//                 </Text>
//             )}
//         </div>
//     );
// };

export { TextFieldView as TextField };
