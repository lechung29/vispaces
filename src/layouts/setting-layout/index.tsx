import React from "react";
import { motion } from "framer-motion";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IAction } from "@/types/Function";
import SettingNavigationCard from "@/components/settingnavigation/SettingNavigationCard";
import SettingNavigationContent from "@/components/settingnavigation/SettingNavigationContent";


export interface ISettingLayoutProps {}

const SettingLayout: React.FunctionComponent<ISettingLayoutProps> = () => {
    const navigate = useNavigate()

    const backToPreviousPage: IAction = () => {
        navigate(-1);
    }
    return <motion.section className="h-full w-full max-w-2xl py-6 md:mx-auto mx-8 relative">
        <motion.div className="settings-title-part w-full py-6 mb-4 h-full">
            <motion.div className="flex items-center gap-1 mb-1">
                <IoChevronBack size={14} color="3b82f6"/>
                <motion.span className="text-[#3b82f6] text-[14px] font-semibold cursor-pointer" onClick={backToPreviousPage}>Back</motion.span>
            </motion.div>
            <motion.h1 className="settings-title text-[30px] text-black font-black">Settings</motion.h1>
        </motion.div>
        <SettingNavigationCard />
        <SettingNavigationContent />
    </motion.section>;
};

export { SettingLayout };
