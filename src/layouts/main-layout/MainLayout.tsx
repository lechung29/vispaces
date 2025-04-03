import { Outlet } from "react-router-dom";
import "./index.scss"
import { Navigation } from "../navigation";
import { Notification } from "@/components/notification";
import { useAppSelector } from "@/redux/store/store";
import { notificationBarState } from "@/redux/reducers";
import { ScrollArea } from "@radix-ui/themes";

export const Layout: React.FunctionComponent = () => {
    const { isShow, message, type, duration } = useAppSelector(notificationBarState)
    return <section className="g-main-layout-section">
        <Navigation />
        <ScrollArea 
            className="g-main-layout-scrollbar"
            size="1" 
            type="scroll" 
            scrollbars="vertical"
            scrollHideDelay={1000}
            style={{
                height: "100vh", 
                // width: "100vw",
            }}
        >
            <section className="g-main-layout-section-outlet">
                <Outlet />
            </section>
        </ScrollArea>
        {isShow && <Notification duration={duration} isShow={isShow} message={message} type={type}/>}
    </section>
};