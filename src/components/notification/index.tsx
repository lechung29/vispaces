import React, { useMemo } from "react";
import { hideNotification, updateDuration } from "@/redux/reducers";
import { useAppDispatch } from "@/redux/store/store";
import { Notification } from "@mantine/core";
import { IoCloseCircle } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";

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

    React.useEffect(() => {
        if (duration === 0) {
            dispatch(hideNotification())
            return;
        }
        console.log(duration)
        const interval = setInterval(() => {
            dispatch(updateDuration(duration - 1000))
        }, 1000)
        return () => clearInterval(interval)
    }, [duration])

    return <Notification {...notificationProps}> {message} </Notification>
};

export { NotificationView as Notification };
