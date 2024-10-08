import { AnimationScope, DOMKeyframesDefinition, DynamicAnimationOptions } from "framer-motion";
import { useEffect, useState } from "react";

export interface IUseMotionProps {
    classNameOrId: string;
    keyframes: DOMKeyframesDefinition;
    options: DynamicAnimationOptions;
}

export function useMotion(scope: AnimationScope<HTMLDivElement>, animate: any, options: IUseMotionProps[]): Array<Boolean> {
    const [currentElement, setCurrentElement] = useState(0);
    const [isMounted, setIsMounted] = useState<Boolean[]>([]);
    const recursiveAnimation = async (index: number) => {
        if (scope.current) {
            const elements = scope.current.querySelectorAll(options[index].classNameOrId);
            if (elements.length > 0) {
                await animate(elements, options[index].keyframes, options[index].options);
            }
        }
    };

    useEffect(() => {
        const runAnimations = () => {
            if (currentElement === 0) {
                return recursiveAnimation(currentElement).then(() => {
                    setCurrentElement((prev) => prev + 1);
                });
            } else if (currentElement !== 0 && currentElement <= options.length - 1) {
                return recursiveAnimation(currentElement).then(() => {
                    setCurrentElement((prev) => prev + 1);
                    setIsMounted((prev) => [...prev, true]);
                });
            }
        };

        runAnimations();
    }, [animate, scope, options, currentElement, isMounted]);

    return isMounted;
}
