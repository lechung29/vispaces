/** @format */

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./settingnavigationcard.scss"
import { classNames } from "@/utils";
import { Link, Text } from "../common";
import { Separator } from "radix-ui";
import { UpdateAvatar } from "./UpdateAvatar";

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
        <section className="g-setting-navigation-card-section">
            <div className="g-setting-navigation-card-section-info">
                <UpdateAvatar />
                <div className="g-setting-navigation-card-section-userInfo">
                    <Text 
                        className="g-setting-navigation-card-section-userInfo-name" 
                        as="p"
                        displayText="Killian Le"
                        fw={500}
                    />
                    <Text 
                        className="g-setting-navigation-card-section-userInfo-displayName"
                        as="p"
                        fontSize={14}
                        displayText="@Killian"
                        fw={500}
                    />
                </div>
            </div>
            <Separator.Root className="g-setting-navigation-card-section-separator"/>
            <div className="g-setting-navigation-card-section-router">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={9}
                    className="g-setting-navigation-card-section-swiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {settingNavigationRouter.map((item, index) => (
                        <SwiperSlide key={index} className="setting-navigation-tab-item">
                            <Link 
                                className={classNames("setting-navigation-tab-item-link", {"setting-navigation-tab-item-link-active": window.location.pathname === item.path})} 
                                to={item.path}
                                displayText={item.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export {
    SettingNavigationCard
}
