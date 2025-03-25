import { AnimatedDefaultButton } from '@/components/animatedComponent';
import { IFunc1 } from '@/types/Function';
import { Loader } from '@mantine/core';
import React from 'react'

interface ISubmitButtonProps {
    title: string;
    onClick?: IFunc1<any, void | Promise<void>>;
    isLoading?: boolean;
    className?: string;
}

const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props) => {
    const { title, isLoading, className } = props;
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
    return (
        <AnimatedDefaultButton
            className={`submit-primary-button ${isLoading && "disabled:cursor-not-allowed"} input-stagger-item w-full h-[40px] flex justify-center items-center text-[#fff] rounded-lg ${className}`}
            whileHover={{
                scale: 1.025,
                transition: {
                    type: "spring",
                    stiffness: 2000,
                }
            }}
            disabled={isLoading || isLoadingPromise}
            onClick={handleClick}
        >
            {(isLoading) ? <Loader color="#fff" size={18} /> : title}
        </AnimatedDefaultButton>
    )
}

export default SubmitButton