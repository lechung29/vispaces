import { Outlet } from "react-router-dom";
import { Notification } from "@/components/notification";
import { useAppSelector } from "@/redux/store/store";
import { notificationBarState } from "@/redux/reducers";
import { motion } from 'framer-motion';
import "./index.scss"

export const AuthLayout: React.FunctionComponent = () => {
    const { isShow, message, type, duration } = useAppSelector(notificationBarState)
    return <motion.div className="common-auth-container relative w-screen min-h-screen h-full flex items-center justify-center py-3 px-2">
        <Outlet />
        {isShow && <Notification duration={duration} isShow={isShow} message={message} type={type}/>}
    </motion.div>
};