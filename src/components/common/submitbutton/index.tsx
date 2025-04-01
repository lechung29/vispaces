import LoadingIcon, { IIconProps } from '@/components/icons/loadingicon';
import { IFunc1 } from '@/types/Function';
import React from 'react'
import "./index.scss"
import { classNames } from '@/utils';
import { Button, ButtonProps } from '@radix-ui/themes';

export interface ISubmitButtonChildrenProps extends IIconProps {
}

export interface ISubmitButtonProps extends Omit<ButtonProps, "variant" | "color" | "loading" | "radius"> {
    displayText?: string;
    onClick?: IFunc1<any, void | Promise<void>>;
    isLoading?: boolean;
    className?: string;
    buttonHeight?: number | string;
    buttonWidth?: number | string;
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
        buttonWidth = "auto",
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
    
    return (
        <Button
            {...rest}
            variant="solid"
            radius="full"
            style={{
                ...props.style,
                height: (typeof buttonHeight === "number" )? `${buttonHeight}px` : buttonHeight,
                width: (typeof buttonWidth === "number" )? `${buttonWidth}px` : buttonWidth
            }}
            className={classNames("submit-primary-button", className )}
            disabled={disabled}
            onClick={handleClick}
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
        </Button>
    )
}

export {
    SubmitButton
}