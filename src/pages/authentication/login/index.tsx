import React, { useState } from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { motion, stagger, useAnimate } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";
import { AnimatedDefaultButton, AnimationSubmitButton, AnimationTextField } from '@/components';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useImmerState } from '@/hooks/useImmerState';
import { validateSignIn } from '../validation';
import { AuthService } from '@/services';
import { delay, mapUserInfoFromDataToState } from '@/utils';
import { IResponseStatus } from '@/types/request';
import { useAppDispatch } from '@/redux/store/store';
import { login, showNotification } from '@/redux/reducers';

interface ILoginViewProps { }

interface ILoginViewState {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    showPassword: boolean;
    isLoading: boolean;
    isDisabledInput: boolean;
}

const initialState: ILoginViewState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    showPassword: false,
    isLoading: false,
    isDisabledInput: false,
}

const LoginView: React.FunctionComponent<ILoginViewProps> = (_props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [state, setState] = useImmerState<ILoginViewState>(initialState)
    const { email, password, emailError, passwordError, showPassword, isLoading, isDisabledInput } = state;
    const [scope, animate] = useAnimate<HTMLDivElement>();

    React.useEffect(() => {
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

    const onChangeInput = (value: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setState((draft) => {
            draft[event.target.name] = value;
            draft[event.target.name + "Error"] = ""
        })
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setState({ isLoading: true, isDisabledInput: true })
        const { valid, emailError, passwordError } = validateSignIn(email, password)
        if (!valid) {
            await delay(1500).then(() => {
                setState({ emailError, passwordError, isLoading: false, isDisabledInput: false })
            })
        } else {
            const [data] = await Promise.all([AuthService.loginUser({ email, password }), delay(1500)])
            if (data) {
                if (data.status === IResponseStatus.Error) {
                    setState({ [`${data?.fieldError?.fieldName}Error`]: data?.fieldError?.errorMessage, isLoading: false, isDisabledInput: false})
                } else {
                    dispatch(showNotification({type: "success", message: data.message}))
                    dispatch(login(mapUserInfoFromDataToState(data.data)))
                    setState({ isLoading: false })
                    await delay(2000).then(() => {
                        navigate("/");
                    })
                }
            }
        }
    }

    const isDisabledSubmit = isDisabledInput || isLoading

    const [theme, setTheme] = useState<"light" | "dark">("light")

    return (
        <motion.section ref={scope}>
            <button onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                    document.documentElement.classList.toggle("dark", theme === "dark");
                }}>
                    Theme
                </button>
            <motion.form className='lg:w-[400px] w-[320px] h-auto px-5 pt-3 pb-8 rounded-3xl flex flex-col gap-4 animation-auth-form'>
                <motion.figure className='common-login-logo w-full h-auto flex justify-center'>
                    <motion.img
                        className='h-[100px] object-cover cursor-pointer input-stagger-item'
                        src="/src/assets/vi_space_logo.png"
                        alt="vi_space_logo"
                        onClick={() => navigate("/")}
                    />
                </motion.figure>
                <motion.section className='w-full h-auto flex flex-col gap-4'>
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        variant="soft"
                        placeholder="Email"
                        name="email"
                        value={email}
                        // error={emailError}
                        disabled={isDisabledInput}
                        onChange={onChangeInput}
                        onClear={() => setState({
                            email: "",
                            emailError: "",
                        })}
                    />
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        variant="soft"
                        placeholder="Password"
                        name="password"
                        value={password}
                        // error={passwordError}
                        onChange={onChangeInput}
                        type={showPassword ? "text" : "password"}
                        rightSection={passwordIcon(showPassword)}
                        disabled={isDisabledInput}
                    />
                    <AnimationSubmitButton
                        className="input-stagger-item"
                        displayText="Sign in"
                        disabled={isDisabledSubmit} 
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        buttonHeight={40}
                        childrenProps={{
                            withLoadingText: true,
                        }}
                    />
                </motion.section>
                <motion.section className='w-full h-auto flex items-center justify-center input-stagger-item'>
                    <AnimatedDefaultButton
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
                    </AnimatedDefaultButton>
                </motion.section>
                <motion.section className='w-full h-auto flex items-center justify-center input-stagger-item gap-2'>
                    {/* <Text
                        size="sm"
                        fw={500}
                        c="#94a3b8"
                    >
                        No account?
                    </Text> */}
                    <Link to={"/sign-up"} className='font-normal text-[14px] hover:font-medium hover:text-[#4763ff]'>
                        John now
                    </Link>
                </motion.section>
            </motion.form>
        </motion.section>
    );
};


export {
    LoginView as Login
};
