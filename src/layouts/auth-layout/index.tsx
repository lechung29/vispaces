import { Outlet } from "react-router-dom";
import { Notification } from "@/components/notification";
import { useAppSelector } from "@/redux/store/store";
import { notificationBarState } from "@/redux/reducers";
import "./index.scss"

export const AuthLayout: React.FunctionComponent = () => {
    const { isShow, message, type, duration } = useAppSelector(notificationBarState)
    return <section className="g-common-auth-container">
        <Outlet />
        {isShow && <Notification duration={duration} isShow={isShow} message={message} type={type}/>}
    </section>
};