import { Stack } from '@mantine/core'
import React from 'react'
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
            icon: <AiOutlineHome style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Search",
            path: "/search",
            icon: <FiSearch style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Messages",
            path: "/messages",
            icon: <BiMessageDetail style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Reels",
            path: "/reels",
            icon: <MdOutlineRadio style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Notifications",
            path: "/notifications",
            icon: <div className='w-auto h-auto relative'>
                <IoMdHeartEmpty style={{ color: "#000", fontSize: 20 }} />
                <div className='absolute w-2 h-2 rounded bg-red-500 top-0 right-0'/>
            </div>
        },
        {
            title: "Friends",
            path: "/friends",
            icon: <HiOutlineUsers style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Profile",
            path: "/profile",
            icon: <FaRegCircleUser style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Settings",
            path: "/settings",
            icon: <IoSettingsOutline style={{ color: "#000", fontSize: 20 }} />
        },
        {
            title: "Logout",
            path: "/logout",
            icon: <IoLogOutOutline style={{ color: "#000", fontSize: 20 }} />
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
                        className='p-3 rounded-md font-medium hover:bg-slate-100 cursor-pointer flex items-center gap-2'
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
