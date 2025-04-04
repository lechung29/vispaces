/** @format */

import { Outlet } from "react-router-dom";
import "./index.scss";
import { ScrollArea } from "@radix-ui/themes";

const AuthLayout: React.FunctionComponent = () => {
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
            </section>
        </ScrollArea>
    );
};

export {
    AuthLayout
}