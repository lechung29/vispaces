import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IAction } from "@/types/Function";
import { defaultIconStyle, SettingNavigationCard, SettingNavigationContent, Text } from "@/components";
import "./index.scss"


export interface ISettingLayoutProps {}

const SettingLayout: React.FunctionComponent<ISettingLayoutProps> = () => {
    const navigate = useNavigate()

    const backToPreviousPage: IAction = () => {
        navigate(-1);
    }
    return <section className="g-setting-layout-section">
        <div className="g-settings-title-part">
            <div className="g-settings-title-part-button">
                <IoChevronBack style={defaultIconStyle}/>
                <Text 
                    className="g-settings-title-part-button-text"
                    displayText="Back"
                    fontSize={14}
                    fw={400}
                    onClick={backToPreviousPage}
                />
            </div>
            <Text 
                className="g-settings-title-part-page-name"
                displayText="Settings"
                fontSize={30}
                fw={900}
            />
        </div>
        <SettingNavigationCard />
        <SettingNavigationContent />
    </section>;
};

export { SettingLayout };
