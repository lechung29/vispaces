import { AnimatedDefaultButton } from '@/components/animatedComponent';
import LoadingIcon from '@/components/icons/loadingicon';
import { IFunc1 } from '@/types/Function';
import React from 'react'
import "./index.scss"
interface ISubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    displayText: string;
    onClick?: IFunc1<any, void | Promise<void>>;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
}

const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props) => {
    const { displayText: title, isLoading, className, disabled } = props;
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
        <AnimatedDefaultButton
            className={`submit-primary-button ${(disabled) && "disabled:cursor-not-allowed disabled:!opacity-75"} input-stagger-item w-full h-[40px] flex justify-center items-center text-[#fff] rounded-lg ${className}`}
            whileHover={{
                scale: 1.025,
                transition: {
                    type: "spring",
                    stiffness: 2000,
                }
            }}
            disabled={disabled}
            onClick={handleClick}
        >
            {isLoadingValue ? <LoadingIcon withLoadingText={true} color="white" size={20} /> : title}
        </AnimatedDefaultButton>
    )
}

export default SubmitButton