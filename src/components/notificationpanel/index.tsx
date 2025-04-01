import { IAction } from '@/types/Function'
import React, { useEffect, useMemo, useRef } from 'react'
import { motion } from "framer-motion"
import "./index.scss"
import { IoCloseOutline } from "react-icons/io5";
import { TooltipItem } from '@/utils'
import { AnimatedButton } from '../animatedComponent'
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { NotificationItem } from '../notificationitem'
import { IconButton, ScrollArea, Text } from '@radix-ui/themes';

export interface INotificationPanelProps {
    isOpen: boolean
    onClose: IAction;
    headerTitle: string
    hasCloseButton?: boolean
    content?: React.ReactNode
    parentRef?: React.MutableRefObject<HTMLDivElement | null>
}

const NotificationPanelView: React.FunctionComponent<INotificationPanelProps> = (props) => {
    const { isOpen, onClose, parentRef, headerTitle } = props
    const panelRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (panelRef.current && !!parentRef?.current && !panelRef.current.contains(event.target as Node) && !parentRef.current.contains(event.target as Node)) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const closeButton = useMemo(() => {
        return <IconButton
            color='gray'
            tabIndex={0}
            size="3"
            variant="soft"
            aria-label="Close"
            onClick={onClose}
        >
            <IoCloseOutline style={{ width: '70%', height: '70%' }} />
        </IconButton>
    }, [])

    const checkMarkAsReadButton = useMemo(() => {
        return <IconButton
            color='gray'
            tabIndex={0}
            size="3"
            variant="soft"
            aria-label="Mark as read"
            onClick={() => console.log("hello")}
        >
            <IoMdCheckmarkCircleOutline style={{ width: '50%', height: '50%' }} />
        </IconButton>
    }, [])

    return (
        <motion.aside
            hidden={!isOpen}
            ref={panelRef}
            className='notification-panel-section w-96 h-[100vh] bg-white absolute top-0 bottom-0 left-[100%] z-10'
        >
            <ScrollArea type='hover'>
                <motion.section className='w-full h-full py-5'>
                    <motion.header className='w-full h-full flex items-center justify-between px-4'>
                        <Text tabIndex={0} className='!font-medium !text-[22px] text-[#3f4854]'>{headerTitle}</Text>
                        <motion.article className='w-auto flex items-center justify-center gap-1'>
                            {TooltipItem(checkMarkAsReadButton, "Mark as read")}
                            {TooltipItem(closeButton, "Close")}
                        </motion.article>
                    </motion.header>
                    <motion.article className='w-full h-auto px-4 my-5 flex items-center justify-start'>
                        <Text tabIndex={0} className='!text-[15px] !text-[#4b5563] font-medium'>New</Text>
                    </motion.article>
                    <motion.article className='w-full h-auto px-4 my-5 flex flex-col gap-1'>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                    </motion.article>
                    {/* <Divider className='w-full' my="0" size={"xs"} /> */}
                    <motion.article className='w-full h-auto px-4 my-5 flex items-center justify-start'>
                        <Text tabIndex={0} className='!text-[15px] !text-[#4b5563] font-medium'>This Week</Text>
                    </motion.article>
                    <motion.article className='w-full h-auto px-4 my-5 flex flex-col gap-1'>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={true}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={true}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                    </motion.article>
                    <motion.section className='w-full h-auto px-4 my-3 flex items-center justify-center'>
                        <AnimatedButton
                            className='submit-primary-button disabled:cursor-not-allowed disabled:text-white w-auto h-auto !px-3 !py-1 text-[#fff] !text-[13px] !rounded-3xl'
                            disabled={true}
                            leftSection={<motion.div
                                whileInView={{
                                    scale: [0.5, 1],
                                    transition: {
                                        duration: 1,
                                        type: "spring",
                                        stiffness: 200,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                    }
                                }}
                            >
                                <IoIosArrowRoundDown size={20} />
                            </motion.div>}
                        >
                            Load more
                        </AnimatedButton>
                    </motion.section>
                </motion.section>
            </ScrollArea>
        </motion.aside>
    )
}

export {
    NotificationPanelView as NotificationPanel
}