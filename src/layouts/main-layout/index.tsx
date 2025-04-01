import { Outlet } from "react-router-dom";
import "./index.scss"
import { Navigation } from "../navigation";
import { motion } from "framer-motion"
import { Notification } from "@/components/notification";
import { useAppSelector } from "@/redux/store/store";
import { notificationBarState } from "@/redux/reducers";
import { ScrollArea } from "@radix-ui/themes";

export const Layout: React.FunctionComponent = () => {
    const { isShow, message, type, duration } = useAppSelector(notificationBarState)
    return <motion.section className="common-layout-section w-screen min-h-screen h-full flex items-center">
        <Navigation />
        <ScrollArea type="hover">
            <motion.section className="common-layout-main-section min-h-screen flex-1 bg-customBg1">
                <Outlet />
            </motion.section>
        </ScrollArea>
        {isShow && <Notification duration={duration} isShow={isShow} message={message} type={type}/>}
    </motion.section>
};