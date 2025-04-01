/** @format */

import { classNames } from "@/utils";
import React from "react";
import { MdSearch } from "react-icons/md";
import "./index.scss";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useControllableState } from "@/hooks/useControlLabelState";
import { IAction } from "@/types/Function";
import { TextField } from "@radix-ui/themes";
import { RootProps } from "@radix-ui/themes/components/text-field";
import { motion } from "framer-motion";

export interface ITextInputProps extends Omit<RootProps, "onChange" | "value" | "autoComplete"> {
    haveSearchIcon?: boolean;
    leftSection?: JSX.Element;
    rightSection?: JSX.Element;
    value?: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: IAction;
}

const TextFieldView: React.FunctionComponent<ITextInputProps> = (props) => {
    const { className, size = "3", radius = "full", variant = "soft", haveSearchIcon = false, leftSection, rightSection, value, onChange, onClear, ...rest } = props;

    const [internalInputValue, setInternalInputValue] = useControllableState<string>({
        value: value,
        defaultValue: value,
        onChange: (value, event) => {
            onChange?.(value, event);
        },
    });

    const inputLeftSection = React.useMemo(() => {
        return haveSearchIcon || leftSection ? haveSearchIcon ? <MdSearch style={{ width: 20, height: 20 }} /> : leftSection : <></>;
    }, [leftSection, haveSearchIcon]);

    const inputRightSection = React.useMemo(() => {
        return onClear ? (
            internalInputValue ? (
                <motion.div
                    tabIndex={0}
                    whileHover={{
                        // scale: [1.025, 0.975, 1],
                        rotate: 360,
                        transition: {
                            repeat: Infinity,
                            duration: "2000ms",
                            ease: "easeInOut",
                        },
                    }}
                >
                    <IoCloseCircleSharp
                        aria-label="Clear"
                        onClick={onClear}
                        style={{
                            width: 20,
                            height: 20,
                            cursor: "pointer",
                            color: "var(--primary-icon-color)",
                        }}
                    />
                </motion.div>
            ) : (
                <></>
            )
        ) : (
            rightSection
        );
    }, [internalInputValue, rightSection, onClear]);

    return (
        <TextField.Root
            {...rest}
            className={classNames("text-input-wrapper", className)}
            size={size}
            radius={radius}
            variant={variant}
            value={internalInputValue}
            autoComplete="off"
            onChange={(event) => {
                setInternalInputValue(event.target.value, event);
            }}
        >
            <TextField.Slot>{inputLeftSection}</TextField.Slot>
            <TextField.Slot>{inputRightSection}</TextField.Slot>
        </TextField.Root>
    );
};

export { TextFieldView as TextField };
