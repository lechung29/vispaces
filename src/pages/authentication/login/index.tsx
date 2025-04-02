import React, { useState } from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { motion, stagger, useAnimate } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";
import { AnimationSubmitButton, AnimationTextField, ClearIconButton, defaultIconStyle, IconButton, PasswordIconButton } from '@/components';
import { useImmerState } from '@/hooks/useImmerState';
import { validateSignIn } from '../validation';
import { AuthService } from '@/services';
import { delay, mapUserInfoFromDataToState } from '@/utils';
import { IResponseStatus } from '@/types/request';
import { useAppDispatch } from '@/redux/store/store';
import { login, showNotification } from '@/redux/reducers';
import { IoKeySharp } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { Text } from '@radix-ui/themes';

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
                animate(scope.current, { x: [-10, 10, -10, 10, -5, 5, 0]}, { duration: 0.4 });
            })
        } else {
            const [data] = await Promise.all([AuthService.loginUser({ email, password }), delay(1500)])
            if (data) {
                if (data.status === IResponseStatus.Error) {
                    setState({ [`${data?.fieldError?.fieldName}Error`]: data?.fieldError?.errorMessage, isLoading: false, isDisabledInput: false})
                    animate(scope.current, { x: [-10, 10, -10, 10, -5, 5, 0] }, { duration: 0.4 });
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
            <section className="animation-auth-form">
                <div className='common-login-logo'>
                    <img
                        className='common-login-logo-image input-stagger-item'
                        src="/src/assets/vi_space_logo.png"
                        alt="vi_space_logo"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className='auth-form-content'>
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        variant="soft"
                        placeholder="Email"
                        name="email"
                        disabled={isDisabledInput}
                        value={email}
                        errorMessage={emailError}
                        errorMessageClassName="input-stagger-item"
                        leftSection={<BiSolidUser style={defaultIconStyle} />}
                        rightSection={<ClearIconButton 
                            className='g-clear-input-icon-button' 
                            radius="full"
                            variant="ghost" 
                            showClear={!!email}
                            onClick={() => setState({
                                email: "",
                                emailError: "",
                            })}/>
                        }
                        onChange={onChangeInput}
                    />
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        variant="soft"
                        placeholder="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        disabled={isDisabledInput}
                        value={password}
                        errorMessage={passwordError}
                        errorMessageClassName="input-stagger-item"
                        leftSection={<IoKeySharp style={defaultIconStyle}/>}
                        rightSection={<PasswordIconButton 
                            className='g-clear-input-icon-button' 
                            radius="full"
                            variant="ghost" 
                            showPassword={showPassword} 
                            onShowPasswordChange={(showPassword) => {
                                setState({ showPassword })
                            }}/>
                        }
                        onChange={onChangeInput}
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
                </div>
                <div className='auth-form-footer-action input-stagger-item'>
                    <motion.div
                        whileHover={{
                            scale: 1.25,
                            rotate: 360,
                            transition: {
                                type: "spring",
                                stiffness: 200,
                            }
                        }}
                    >
                        <IconButton 
                            className="auth-google-button"
                            iconElement={<FcGoogle className='auth-google-button-icon' />}
                        />
                    </motion.div>
                </div>
                <div className='auth-form-footer-link-section input-stagger-item'>
                    <Text className="auth-form-footer-link-text">No account?</Text>
                    <Link to="/sign-up" className='auth-form-footer-link'>John now</Link>
                </div>
            </section>
        </motion.section>
    );
};


export {
    LoginView as Login
};
