import React, { ChangeEvent, useEffect } from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Loader, Text } from '@mantine/core';
import { motion, stagger, useAnimate } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";
import { AnimatedButton, AnimatedTextInput } from '@/components';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useImmerState } from '@/hooks/useImmerState';
import { validateSignIn } from '../validation';
import { AuthService } from '@/services';
import { delay } from '@/utils';

interface ILoginViewProps { }

interface ILoginViewState {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    showPassword: boolean;
    isLoading: boolean;
}

const initialState: ILoginViewState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    showPassword: false,
    isLoading: false,
}

const LoginView: React.FC<ILoginViewProps> = (_props) => {
    const navigate = useNavigate();
    const [state, setState] = useImmerState<ILoginViewState>(initialState)
    const { email, password, emailError, passwordError, showPassword, isLoading } = state;
    const [scope, animate] = useAnimate<HTMLDivElement>();

    useEffect(() => {
        if (scope.current) {
            animate(scope.current.querySelectorAll(".animation-auth-form"), {
                opacity: [0, 1],
                scale: [0, 1],
                x: [-2000, 0]
            }, {
                delay: 0.25,
                stiffness: 80,
                duration: 1,
                ease: 'easeIn',
                type: "spring",
            })

            animate(scope.current.querySelectorAll(".input-stagger-item"), {
                opacity: [0, 1],
                y: [-20, 0],
            }, {
                delay: stagger(0.15, { startDelay: 1.5 }),
                duration: 1,
                type: "spring",
                stiffness: 80,
            })
        }
    }, [scope])

    const passwordIcon = (status: boolean) => {
        const Icon = status ? GoEyeClosed : GoEye;

        return (
            <Icon
                tabIndex={-1}
                style={{ cursor: "pointer" }}
                size={20}
                color="gray"
                onClick={() => setState({ showPassword: !status })}
                onMouseDown={(e) => e.preventDefault()}
            />
        );
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setState((draft) => {
            draft[event.target.name] = event.target.value;
            draft[event.target.name + "Error"] = ""
        })
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setState({ isLoading: true })
        const { valid, emailError, passwordError } = validateSignIn(email, password)
        if (!valid) {
            setState((draft) => {
                draft.emailError = emailError;
                draft.passwordError = passwordError;
            })
            return Promise.resolve()
        }
        try {
            const data = await AuthService.loginUser(email, password)
            if (data.responseInfo.status === 1) {
                setState({ isLoading: false })
                await delay(1500).then(() => {
                    navigate("/");
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <motion.div
            className='common-auth-container w-screen min-h-screen h-full flex items-center justify-center py-3 px-2'
            ref={scope}
        >
            <motion.div className='lg:w-[400px] w-[320px] h-auto px-5 pt-3 pb-8 rounded-3xl bg-white flex flex-col gap-4 animation-auth-form'>
                <motion.div className='common-login-logo w-full h-auto flex justify-center'>
                    <motion.img
                        className='h-[100px] object-cover cursor-pointer input-stagger-item'
                        src="/src/assets/vi_space_logo.png"
                        alt="vi_space_logo"
                        onClick={() => navigate("/")}
                    />
                </motion.div>
                <motion.div className='w-full h-auto flex flex-col gap-3'>
                    <AnimatedTextInput
                        className='common-validation-input input-stagger-item'
                        size="md"
                        variant="filled"
                        radius="md"
                        placeholder="Email"
                        name='email'
                        value={email}
                        error={emailError}
                        onChange={onChangeInput}
                        whileHover={{ scale: 1.025 }}

                    />
                    <AnimatedTextInput
                        className='common-validation-input input-stagger-item'
                        size="md"
                        variant="filled"
                        radius="md"
                        placeholder="Password"
                        name='password'
                        value={password}
                        error={passwordError}
                        onChange={onChangeInput}
                        type={showPassword ? "text" : "password"}
                        rightSection={passwordIcon(showPassword)}
                        whileHover={{ scale: 1.025 }}
                    />
                    <AnimatedButton
                        className='submit-primary-button disabled:cursor-not-allowed input-stagger-item w-full h-[40px] flex justify-center items-center text-[#fff] rounded-lg'
                        whileHover={{
                            scale: 1.025,
                            transition: {
                                type: "spring",
                                stiffness: 2000,
                            }
                        }}
                        onClick={handleSubmit}
                    >
                        {isLoading ? <Loader color="#fff" size={18} /> : "Sign in"}
                    </AnimatedButton>
                </motion.div>
                <motion.div className='w-full h-auto flex items-center justify-center input-stagger-item'>
                    <AnimatedButton
                        className='px-2 bg-transparent auth-google-button'
                        whileHover={{
                            scale: 1.25,
                            rotate: 360,
                            transition: {
                                type: "spring",
                                stiffness: 200,
                            }
                        }}
                    >
                        <FcGoogle className='auth-google-button-icon' />
                    </AnimatedButton>
                </motion.div>
                <motion.div className='w-full h-auto flex items-center justify-center input-stagger-item gap-2'>
                    <Text
                        size="sm"
                        fw={500}
                        c="#94a3b8"
                    >
                        No account?
                    </Text>
                    <Link to={"/sign-up"} className='font-normal text-[14px] hover:font-medium hover:text-[#4763ff]'>
                        John now
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};


export {
    LoginView as Login
};
