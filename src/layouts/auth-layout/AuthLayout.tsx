/** @format */

import { Outlet } from "react-router-dom";
import { Notification } from "@/components/notification";
import { useAppSelector } from "@/redux/store/store";
import { notificationBarState } from "@/redux/reducers";
import "./index.scss";
import { ScrollArea } from "@radix-ui/themes";

export const AuthLayout: React.FunctionComponent = () => {
    const { isShow, message, type, duration } = useAppSelector(notificationBarState);
    return (
        <ScrollArea 
            className="g-auth-layout-scrollbar"
            size="1" 
            type="scroll" 
            scrollbars="both"
            scrollHideDelay={1000}
            style={{
                height: "100vh", 
                width: "100vw",
            }}
        >
            <section className="g-common-auth-container">
                <Outlet />
                {isShow && <Notification duration={duration} isShow={isShow} message={message} type={type} />}
            </section>
        </ScrollArea>
    );
};
