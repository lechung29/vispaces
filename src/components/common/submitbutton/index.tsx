import LoadingIcon, { IIconProps } from '@/components/icons/loadingicon';
import { IFunc1 } from '@/types/Function';
import React from 'react'
import "./index.scss"
import { classNames } from '@/utils';
import { Button, ButtonProps } from '@mantine/core';
import { motion } from 'framer-motion';

export interface ISubmitButtonChildrenProps extends IIconProps {
    }

interface ISubmitButtonProps extends Omit<ButtonProps, "h" | "variant"> {
    displayText?: string;
    onClick?: IFunc1<any, void | Promise<void>>;
    isLoading?: boolean;
    className?: string;
    buttonHeight?: number;
    childrenProps?: ISubmitButtonChildrenProps;
}

const defaultChildrenProps: ISubmitButtonChildrenProps = {
    withLoadingText: false,
    color: "white",
    size: 16,
    fontWeight: "400"
};

const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props) => {
    const { 
        displayText, 
        isLoading, 
        className, 
        disabled, 
        children, 
        buttonHeight = 40, 
        childrenProps = {},
        ...rest 
    } = props;
    const mergeChildrenProps = {...defaultChildrenProps, ...childrenProps };
    const { color, size, fontWeight, withLoadingText } = mergeChildrenProps;

    const [isLoadingPromise, setIsLoadingPromise] = React.useState<boolean>(false)

    const handleClick = (event) => {
        setIsLoadingPromise(true)
        const suspensePromise: void | Promise<void> = props.onClick?.(event)
        if (suspensePromise instanceof Promise) {
            suspensePromise.finally(() => setIsLoadingPromise(false));
            return;
        }
        setIsLoadingPromise(false);
    }
    const isLoadingValue = React.useMemo(() => {
        return isLoading !== undefined ? isLoading : isLoadingPromise
    }, [isLoading, isLoadingPromise])

    const ButtonComponent = motion(Button as any)
    
    return (
        <ButtonComponent
            {...rest}
            className={classNames("submit-primary-button", className )}
            style={{
                ...props.style,
                "--button-color": color,
                "--text-size": `${size}px`,
                "--font-weight": fontWeight
            }}
            whileHover={{
                scale: 1.025,
                transition: {
                    type: "spring",
                    stiffness: 2000,
                }
            }}
            disabled={disabled}
            onClick={handleClick}
            h={buttonHeight}
        >
            {isLoadingValue 
                ? <LoadingIcon 
                    withLoadingText={withLoadingText!} 
                    color={color!} 
                    size={size!}
                    fontWeight={fontWeight!} 
                /> 
                : displayText || children
            }
        </ButtonComponent>
    )
}

export default SubmitButton