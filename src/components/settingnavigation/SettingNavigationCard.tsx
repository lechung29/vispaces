/** @format */

import React from "react";
import { motion } from "framer-motion";
import UpdateAvatar from "./UpateAvatar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";
import "./settingnavigationcard.scss"

export interface ICommonNavigationRouterProps {
    title: string;
    path: string;
}

const SettingNavigationCard: React.FunctionComponent = () => {
    const swiperRef = React.useRef<SwiperInstance | null>(null);

    const settingNavigationRouter: ICommonNavigationRouterProps[] = [
        {
            title: "General",
            path: "/account-settings",
        },
        {
            title: "Social Links",
            path: "/account-settings/social-links",
        },
        {
            title: "Notifications",
            path: "/account-settings/notifications",
        },
        {
            title: "Privacy",
            path: "/account-settings/privacy",
        },
        {
            title: "Password",
            path: "/account-settings/password",
        }
    ]
    return (
        <motion.section className="bg-white border-slate-200 rounded-xl shadow-sm">
            <motion.section className="w-full h-auto flex items-center md:p-10 p-6 md:gap-8 gap-4">
                <UpdateAvatar />
                <motion.div className="flex-1">
                    <motion.h3 className="md:text-xl text-base font-semibold text-black">Killian Le</motion.h3>
                    <motion.p className="text-sm text-blue-600 mt-1 font-medium">@Killian</motion.p>
                </motion.div>
            </motion.section>
            <motion.hr className="border-t border-gray-100 dark:border-slate-700" />
            <motion.section className="relative w-full px-2">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={9}
                    className="w-full h-auto"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {settingNavigationRouter.map((item, index) => (
                        <SwiperSlide key={index} className="setting-navigation-tab-item !mr-0 !w-auto !h-full py-4">
                            <NavLink className="font-semibold text-[14px] text-[#627b80] px-6 py-4" to={item.path}>{item.title}</NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.section>
        </motion.section>
    );
};

export default SettingNavigationCard;
