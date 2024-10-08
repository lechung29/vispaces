import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { motion, stagger, useAnimate } from 'framer-motion';
import { IUseMotionProps, useMotion } from '@/utils';

interface ILoginViewProps { }

const LoginView: React.FC<ILoginViewProps> = (_props) => {
    const navigate = useNavigate();
    const [scope, animate] = useAnimate<HTMLDivElement>();
    const animateElement: IUseMotionProps[] = [
        {
            classNameOrId: ".animate-login-form",
            keyframes: { opacity: [0, 1], scale: [0, 1] },
            options: {
                duration: 1,
                ease: 'easeOut',
                delay: stagger(0.2),
            }
        },
        {
            classNameOrId: ".stagger-item",
            keyframes: { opacity: [0, 1], scale: [0, 1] },
            options: {
                duration: 1,
                ease: 'easeOut',
                delay: stagger(0.2),
            }
        }
    ]
    const isMount = useMotion(scope, animate, animateElement)

    return (
        <div
            className='common-login-container w-screen min-h-screen h-full flex items-center justify-center py-3 px-2'
            ref={scope}
        >
            <motion.div className='lg:w-[400px] w-[320px] h-auto px-5 py-3 rounded-3xl bg-white flex flex-col gap-3 animate-login-form'>
                {isMount[0] && <><div className='common-login-logo w-full h-auto flex justify-center'>
                    <img
                        className='h-[100px] object-cover cursor-pointer stagger-item'
                        src="/src/assets/vi_space_logo.png"
                        alt="vi_space_logo"
                        onClick={() => navigate("/")}
                    />
                </div>
                    <motion.div
                        className='w-full h-auto flex flex-col gap-3'
                    >
                        <AnimatedTextInput
                            className='common-validation-input stagger-item'
                            size="md"
                            variant="filled"
                            radius="md"
                            placeholder="Email"
                        />
                        <AnimatedTextInput
                            className='common-validation-input stagger-item'
                            size="md"
                            variant="filled"
                            radius="md"
                            placeholder="Password"
                        />
                        <AnimatedTextInput
                            className='common-validation-input stagger-item'
                            size="md"
                            variant="filled"
                            radius="md"
                            placeholder="Confirm Password"
                        />
                    </motion.div></>}
            </motion.div>
        </div>
    );
};

const AnimatedTextInput = motion(TextInput);

export {
    LoginView as Login
};
