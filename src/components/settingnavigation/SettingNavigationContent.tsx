/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import "./settingnavigationcontent.scss";

const SettingNavigationContent: React.FunctionComponent = () => {
    return (
        <section className="g-setting-navigation-content-section">
            <Outlet />
        </section>
    );
};

export {
    SettingNavigationContent,
}
