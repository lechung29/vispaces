import { Outlet } from "react-router-dom";
import "./index.scss"
import { Navigation } from "../navigation";

export const Layout: React.FunctionComponent = () => {

    return <div className="common-layout-section w-screen min-h-screen h-full flex items-center">
        <Navigation />
        <div className="common-layout-main-section h-full flex-1">
            <Outlet />
        </div>
    </div>
};