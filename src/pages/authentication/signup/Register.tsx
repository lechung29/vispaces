import React from "react";
import "./../login/index.scss";
import { useNavigate } from "react-router-dom";
import { motion, stagger, useAnimate } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { AnimationTextField, defaultIconStyle, ClearIconButton, PasswordIconButton, AnimationSubmitButton, IconButton, Text, Link } from "@/components";
import { useImmerState } from "@/hooks/useImmerState";
import { validateSignUp } from "../validation";
import { AuthService } from "@/services";
import { delay } from "@/utils";
import { IResponseStatus } from "@/types/request";
import { useAppDispatch } from "@/redux/store/store";
import { showNotification } from "@/redux/reducers";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";

interface ISignUpViewProps { }

interface ISignUpViewState {
    email: string;
    displayName: string;
    password: string;
    confirmPassword: string;
    emailError: string;
    displayNameError: string;
    passwordError: string;
    confirmPasswordError: string;
    showPassword: boolean;
    showConfirmPassword: boolean;
    isLoading: boolean;
    isDisabledInput: boolean;
}

const initialState: ISignUpViewState = {
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    emailError: "",
    displayNameError: "",
    passwordError: "",
    confirmPasswordError: "",
    showPassword: false,
    showConfirmPassword: false,
    isLoading: false,
    isDisabledInput: false,
}

const SignUpView: React.FunctionComponent<ISignUpViewProps> = (_props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [state, setState] = useImmerState<ISignUpViewState>(initialState)
    const { email, displayName, password, confirmPassword, showPassword, showConfirmPassword, confirmPasswordError, displayNameError, emailError, passwordError, isLoading, isDisabledInput } = state
    const [scope, animate] = useAnimate<HTMLDivElement>();

    React.useEffect(() => {
        if (scope.current) {
            animate(scope.current.querySelectorAll(".animation-auth-form"), {
                opacity: [0, 1],
                scale: [0, 1],
                x: [-2000, 0]
            }, {
                delay: 0.5,
                stiffness: 80,
                duration: 1,
                ease: "easeIn",
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

    const isDisabledSubmit = isDisabledInput || isLoading

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setState({ isLoading: true, isDisabledInput: true })
        const { valid, emailError, displayNameError, passwordError, confirmPasswordError } = validateSignUp(email, displayName, password, confirmPassword)
        if (!valid) {
            await delay(1500).then(() => {
                setState({ emailError, displayNameError, passwordError, confirmPasswordError, isLoading: false, isDisabledInput: false })
                animate(scope.current, { x: [-10, 10, -10, 10, -5, 5, 0]}, { duration: 0.4 });
            })
        } else {
            const [data] = await Promise.all([AuthService.registerUser({ email, displayName, password }), delay(1500)])
            if (data) {
                if (data.status === IResponseStatus.Error) {
                    setState({ [`${data?.fieldError?.fieldName}Error`]: data?.fieldError?.errorMessage, isLoading: false, isDisabledInput: false })
                    animate(scope.current, { x: [-10, 10, -10, 10, -5, 5, 0]}, { duration: 0.4 });
                } else {
                    dispatch(showNotification({type: "success", message: data.message}))
                    setState({ isLoading: false })
                    await delay(2000).then(() => {
                        navigate("/login");
                    })
                }
            }
        }
    }

    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    })

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme])

    return (
        <motion.section ref={scope}>
            <section className="animation-auth-form">
                <div className="common-login-logo">
                    <img
                        className="common-login-logo-image input-stagger-item"
                        src="/src/assets/vi_space_logo.png"
                        alt="vi_space_logo"
                    />
                </div>
                <div className="auth-form-content">
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        errorMessageClassName="input-stagger-item"
                        placeholder="Email"
                        name="email"
                        disabled={isDisabledInput}
                        value={email}
                        errorMessage={emailError}
                        leftSection={<BiSolidUser  style={defaultIconStyle} />}
                        rightSection={<ClearIconButton 
                            className="g-clear-input-icon-button"
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
                        errorMessageClassName="input-stagger-item"
                        placeholder="Display name"
                        name="displayName"
                        disabled={isDisabledInput}
                        value={displayName}
                        errorMessage={displayNameError}
                        leftSection={<MdOutlineAlternateEmail style={defaultIconStyle} />}
                        rightSection={<ClearIconButton 
                            className="g-clear-input-icon-button"
                            radius="full"
                            variant="ghost" 
                            showClear={!!displayName}
                            onClick={() => setState({
                                displayName: "",
                                displayNameError: "",
                            })}/>
                        }
                        onChange={onChangeInput}
                    />
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        errorMessageClassName="input-stagger-item"
                        placeholder="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        disabled={isDisabledInput}
                        value={password}
                        errorMessage={passwordError}
                        leftSection={<IoKeySharp style={defaultIconStyle}/>}
                        rightSection={<PasswordIconButton 
                            className="g-clear-input-icon-button" 
                            radius="full"
                            variant="ghost" 
                            showPassword={showPassword} 
                            onShowPasswordChange={(showPassword) => {
                                setState({ showPassword })
                            }}/>
                        }
                        onChange={onChangeInput}
                    />       
                    <AnimationTextField
                        className="common-validation-input input-stagger-item"
                        errorMessageClassName="input-stagger-item"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        disabled={isDisabledInput}
                        value={confirmPassword}
                        errorMessage={confirmPasswordError}
                        leftSection={<IoKeySharp style={defaultIconStyle}/>}
                        rightSection={<PasswordIconButton 
                            className="g-clear-input-icon-button" 
                            radius="full"
                            variant="ghost" 
                            showPassword={showConfirmPassword} 
                            onShowPasswordChange={(showConfirmPassword) => {
                                setState({ showConfirmPassword })
                            }}/>
                        }
                        onChange={onChangeInput}
                    />
                    <AnimationSubmitButton
                        className="input-stagger-item"
                        displayText="Sign Up"
                        disabled={isDisabledSubmit} 
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        buttonHeight={40}
                        childrenProps={{
                            withLoadingText: true,
                        }}
                    />
                </div>
                <div className="auth-form-footer-action input-stagger-item">
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
                            iconElement={<FcGoogle className="auth-google-button-icon" />}
                        />
                    </motion.div>
                </div>
                <div className="auth-form-footer-link-section input-stagger-item">
                    <Text 
                        className="auth-form-footer-link-text"
                        displayText="Have an account?"
                        as="p"
                        wrap="wrap"
                        trim="normal"
                        truncate={true}
                    />
                    <Link 
                        className="auth-form-footer-link" 
                        to="/login" 
                        displayText="Sign In"
                    />
                </div>
            </section>
        </motion.section>
    );
};


export {
    SignUpView as SignUp
};
