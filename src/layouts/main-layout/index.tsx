import { Outlet } from "react-router-dom";
import "./index.scss"

export const Layout: React.FunctionComponent = () => {

    return <div className="tc-layout-section">
        <div className="tc-layout-main-section">
            <Outlet />
        </div>
    </div>
};