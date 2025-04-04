import { IAction } from "@/types/Function"
import React from "react"
import { motion } from "framer-motion"
import "./index.scss"
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { NotificationItem } from "../notificationitem"
import { ScrollArea } from "@radix-ui/themes";
import { bigIconStyle, defaultIconStyle, IconButton, SubmitButton, Text, Tooltip } from "../common";

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
    const panelRef = React.useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (panelRef.current && !!parentRef?.current && !panelRef.current.contains(event.target as Node) && !parentRef.current.contains(event.target as Node)) {
            onClose()
        }
    }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const closeButton = React.useMemo(() => {
        return <IconButton
            size="3"
            aria-label="Close panel"
            radius="full"
            tabIndex={0}
            onClick={onClose}
            iconElement={<IoCloseOutline style={bigIconStyle} />}
        />
    }, [])

    const checkMarkAsReadButton = React.useMemo(() => {
        return <IconButton
            size="3"
            aria-label="Mark as read"
            radius="full"
            tabIndex={0}
            onClick={() => console.log("hello")}
            iconElement={<IoMdCheckmarkCircleOutline style={bigIconStyle} />}
        />
    }, [])

    const loadMoreIcon = React.useMemo(() => {
        return <motion.div
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
            <IoIosArrowRoundDown style={defaultIconStyle} />
        </motion.div>
    }, [])

    return (
        <aside
            hidden={!isOpen}
            ref={panelRef}
            className="g-notification-panel-section"
        >
            <ScrollArea 
                className="g-notification-panel-scrollbar"
                size="1" 
                type="scroll" 
                scrollbars="vertical"
                scrollHideDelay={1000}
                style={{
                    height: "100vh", 
                }}
            >
                <section className="g-notification-panel-container w-full h-full py-5">
                    <div className="g-notification-panel-header">
                        <Text 
                            className="g-notification-panel-header-title"
                            fontSize={22}
                            fw={500}
                            tabIndex={0} 
                            displayText={headerTitle}
                        />
                        <div className="g-notification-panel-header-action">
                            <Tooltip 
                                tooltipContent="Mark as read"
                                element={checkMarkAsReadButton}
                                side="top"
                            />
                            <Tooltip 
                                tooltipContent="Close panel"
                                element={closeButton}
                                side="top"
                            />
                        </div>
                    </div>
                    <Text 
                        className="g-notification-panel-newNotifications-text"
                        displayText="New notifications"
                        aria-label="New notifications"
                        as="div"
                        fontSize={15}
                        fw={500}
                        tabIndex={0} 
                    />
                    <div className="g-notification-panel-newNotifications-content">
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                    </div>
                    {/* <Divider className="w-full" my="0" size={"xs"} /> */}
                    <Text 
                        className="g-notification-panel-newNotifications-text"
                        displayText="This Week"
                        aria-label="This Week"
                        as="div"
                        fontSize={15}
                        fw={500}
                        tabIndex={0} 
                    />
                    <div className="g-notification-panel-newNotifications-content">
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={true}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={true}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                        <NotificationItem isRead={false}/>
                    </div>
                    <div className="g-notification-panel-footer">
                        <SubmitButton
                            className="g-notification-panel-footer-button"
                            displayText="Load more..."
                            buttonHeight="auto"
                            buttonWidth="auto"
                            disabled={true}
                            leftSection={loadMoreIcon}
                        />
                    </div>
                </section>
            </ScrollArea>
        </aside>
    )
}

export {
    NotificationPanelView as NotificationPanel
}