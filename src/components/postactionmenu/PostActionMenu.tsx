import { DropdownMenu } from "radix-ui";
import React from "react"
import { BsThreeDots } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import { IoStopCircleOutline } from "react-icons/io5";
import { defaultIconStyle, IconButton } from "../common";
import "./index.scss"

interface IPostActionMenu {

}

const PostActionMenu: React.FunctionComponent<IPostActionMenu> = (_props) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <IconButton 
                    aria-label="Settings"
                    size="3"
                    radius="full"
                    variant="ghost"
                    iconElement={<BsThreeDots style={defaultIconStyle} />}
                />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="g-DropdownMenuContent" sideOffset={5}>
                    <DropdownMenu.Item className="g-DropdownMenuItem">
                        <IoBookmarkOutline style={defaultIconStyle} /> Add to favorites
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="g-DropdownMenuItem">
                        <IoNotificationsOffOutline style={defaultIconStyle} /> Mute notifications
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="g-DropdownMenuItem">
                        <IoFlagOutline style={defaultIconStyle} /> Report this post
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="g-DropdownMenuItem">
                        <IoShareOutline style={defaultIconStyle} /> Share to others
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="g-DropdownMenuSeparator" />
                    <DropdownMenu.Item className="g-DropdownMenuItem">
                        <IoStopCircleOutline style={defaultIconStyle} /> Un follow
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow className="g-DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export {
    PostActionMenu
}