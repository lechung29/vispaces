import React, { useEffect, useMemo } from "react";
import { hideNotification, updateDuration } from "@/redux/reducers";
import { useAppDispatch } from "@/redux/store/store";
import { IoCloseCircle } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import { motion, useAnimate } from 'framer-motion';
import { Notification } from "../animatedComponent";

export interface INotificationProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
    isShow: boolean;
    noStatusIcon?: boolean;
    duration: number;
}
const NotificationView: React.FunctionComponent<INotificationProps> = (props) => {
    const { type, message, noStatusIcon = false, duration } = props
    const dispatch = useAppDispatch()
    const [scope, animate] = useAnimate<HTMLDivElement>();
    
    const notificationProps = useMemo(() => {
        let color: string = ""
        let icon: JSX.Element = <></>
        switch (type) {
            case "success":
                color = "green";
                icon = <IoCheckmarkCircleSharp color="40c057"/>;
                break;
            case "error":
                color = "red";
                icon = <IoCloseCircle color="#fa5252"/>;
                break;
            case "warning":
                color = "yellow";
                icon = <IoWarning color="ffc800"/>;
                break;
            case "info":
                color = "blue";
                icon = <IoInformationCircle color="228be6"/>;
                break;
            default:
                break;
        }
        const defaultProps = {
            className: "g-notification-bar",
            title: "Thông báo",
            radius: "lg",
            withBorder: true,
            onClose: () => dispatch(hideNotification())
        }
        return noStatusIcon ? { ...defaultProps, color: color } : { ...defaultProps, icon: icon }
    }, [noStatusIcon, type])

    useEffect(() => {
        if (scope.current && duration === 5000) {
            animate(scope.current.querySelectorAll(".g-notification-bar"), {
                    opacity: [0, 1],
                    scale: [0, 1],
                },
                {
                    delay: 0.25,
                    stiffness: 80,
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                }
            );
        }
    }, [scope, duration]);

    React.useEffect(() => {
        if (duration === 0) {
            dispatch(hideNotification())
            return;
        }
        const interval = setInterval(() => {
            dispatch(updateDuration(duration - 500))
        }, 500)
        return () => clearInterval(interval)
    }, [duration])

    return <motion.section ref={scope}>
        <Notification {...notificationProps}> {message} </Notification>
    </motion.section>
};

export { NotificationView as Notification };
