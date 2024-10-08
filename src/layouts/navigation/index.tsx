import { Stack } from '@mantine/core'
import React from 'react'
import { motion } from "framer-motion"
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineRadio } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import "./index.scss"

interface INavigateRouter {
    title: string;
    path?: string;
    icon: JSX.Element
}

const NavigationView: React.FC = () => {
    const navigate = useNavigate()
    const NavigateRouter: INavigateRouter[] = [
        {
            title: "Home",
            path: "/",
            icon: <AiOutlineHome className="common-navigation-icon" />
        },
        {
            title: "Search",
            path: "/search",
            icon: <FiSearch className="common-navigation-icon" />
        },
        {
            title: "Messages",
            path: "/messages",
            icon: <BiMessageDetail className="common-navigation-icon" />
        },
        {
            title: "Reels",
            path: "/reels",
            icon: <MdOutlineRadio className="common-navigation-icon" />
        },
        {
            title: "Notifications",
            path: "/notifications",
            icon: <div className='w-auto h-auto relative'>
                <IoMdHeartEmpty className="common-navigation-icon" />
                <span className="absolute flex w-3 h-3 top-0 right-0">
                    <motion.div
                        className='absolute w-2 h-2 rounded bg-red-300 top-0 right-0'
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                            scale: [1, 2, 2],  // Scale from 1 to 2
                            opacity: [1, 1, 0], // Opacity from 1 to 0
                        }}
                        transition={{
                            duration: 1, // Duration of 1 second
                            times: [0, 0.75, 1],
                            ease: [0, 0, 0.2, 1], // cubic-bezier easing
                            repeat: Infinity, // Loop the animation infinitely
                            repeatType: "loop", // Looping type
                        }}
                    />
                    <span className="absolute top-0 right-0 inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
            </div>
        },
        {
            title: "Friends",
            path: "/friends",
            icon: <HiOutlineUsers className="common-navigation-icon" />
        },
        {
            title: "Profile",
            path: "/profile",
            icon: <FaRegCircleUser className="common-navigation-icon" />
        },
        {
            title: "Settings",
            path: "/settings",
            icon: <IoSettingsOutline className="common-navigation-icon" />
        },
        {
            title: "Logout",
            path: "/logout",
            icon: <IoLogOutOutline className="common-navigation-icon" />
        }
    ]
    return (
        <div className="common-navigation-section sticky top-0 left-0 w-auto lg:w-1/6 p-2 h-screen border-r bg-white">
            <img
                src="/src/assets/vi_space_logo.png"
                alt="vi_space"
                className="lg:block hidden w-full object-cover cursor-pointer"
                onClick={() => navigate("/")}
            />
            <Stack className='w-full' gap={"xs"}>
                {NavigateRouter.map((item) => (
                    <NavLink
                        className='px-3 py-2 rounded-md font-medium hover:bg-slate-100 cursor-pointer flex items-center gap-2'
                        to={item.path!}
                    >
                        {item.icon}
                        <span className='lg:block hidden'>{item.title}</span>
                    </NavLink>
                ))}
            </Stack>
        </div>
    )
}

export {
    NavigationView as Navigation
}
