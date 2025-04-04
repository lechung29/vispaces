import { Outlet } from "react-router-dom";
import "./index.scss"
import { Navigation } from "../navigation";
import { ScrollArea } from "@radix-ui/themes";

const MainLayout: React.FunctionComponent = () => {
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
    </section>
};

export {
    MainLayout
}