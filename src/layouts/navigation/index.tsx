import { ScrollArea, Stack, Tooltip } from '@mantine/core'
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineRadio } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import "./index.scss"
import { Breakpoint, classNames, useMinWidth } from '@/utils';
import { useAppDispatch, useAppSelector } from '@/redux/store/store';
import { searchPanelState, toggleSearchPanel } from '@/redux/reducers';
import SearchPanel from '@/components/searchpanel';
import { IFunc2 } from '@/types/Function';

interface INavigateRouter {
    title: string;
    path?: string;
    icon: JSX.Element
}

const NavigationView: React.FunctionComponent = () => {
    const { openSearchPanel } = useAppSelector(searchPanelState)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null)
    const isLarge = useMinWidth(Breakpoint.LaptopMin)

    const onRenderRouterItem: IFunc2<INavigateRouter, number, JSX.Element> = (item, index) => {
        const children = !!item.path
            ? <Link
                key={index}
                className={classNames('px-3 py-2 rounded-md font-medium hover:bg-slate-200 cursor-pointer flex items-center gap-2', {
                    "active": (window.location.pathname === item.path)
                })}
                to={item.path!}
            >
                {item.icon}
                <motion.span className={classNames('hidden', { "lg:block": !openSearchPanel })}>{item.title}</motion.span>
            </Link>
            : <motion.div
                key={index}
                className={classNames('px-3 py-2 rounded-md font-medium hover:bg-slate-100 cursor-pointer flex items-center gap-2')}
                onClick={() => {
                    dispatch(toggleSearchPanel(true))
                }}
            >
                {item.icon}
                <motion.span className={classNames('hidden', { "lg:block": !openSearchPanel })}>{item.title}</motion.span>
            </motion.div>
        
        return (!isLarge || openSearchPanel)
            ? <Tooltip 
                label={item.title}
                style={{
                    color: "white",
                    background: "linear-gradient(90deg,#d63c68,#6a82fb)",
                    fontSize: "13px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}
                styles={{
                    arrow: {
                        background: "#d63c68"
                    }
                }}
                position={"right"}
                color="rgba(255, 255, 255, 1)"
                openDelay={100}
                closeDelay={100}
                arrowSize={6}
                transitionProps={{ 
                    transition: 'fade-right', 
                    duration: 300 
                }}
                withArrow
                events={{
                    focus: true,
                    hover: true,
                    touch: true,
                }}
            >
                {children}
            </Tooltip>
            : children
    }

    const NavigateRouter: INavigateRouter[] = [
        {
            title: "Home",
            path: "/",
            icon: <AiOutlineHome className="common-navigation-icon" />
        },
        {
            title: "Search",
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
            icon: <motion.div className='w-auto h-auto relative'>
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
            </motion.div>
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
        <motion.aside
            ref={ref}
            className={classNames("common-navigation-section relative p-2 h-screen border-r bg-white", {
                "w-1/6": (!openSearchPanel && isLarge),
                "w-auto": !isLarge
            })}
        >
            <ScrollArea h={"calc(100vh - 1rem)"} type='never'>
                <motion.img
                    src="/src/assets/vi_space_logo.png"
                    alt="vi_space"
                    className={classNames("hidden w-full object-cover cursor-pointer pb-2", {
                        "lg:block": !openSearchPanel
                    })}
                    onClick={() => navigate("/")}
                />
                <Stack className='w-full' gap={"xs"}>
                    {NavigateRouter.map((item, index) => onRenderRouterItem(item, index))}
                </Stack>
            </ScrollArea>
            {openSearchPanel && <SearchPanel
                headerTitle='Search'
                isOpen={openSearchPanel}
                onClose={() => dispatch(toggleSearchPanel(false))}
                hasCloseButton={true}
            />}
        </motion.aside>
    )
}

export {
    NavigationView as Navigation
}
