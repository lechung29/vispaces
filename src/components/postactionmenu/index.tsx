import React from 'react'
import { ActionIcon, Menu, rem } from '@mantine/core'
import { BsThreeDots } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import { IoStopCircleOutline } from "react-icons/io5";
interface IPostActionMenu {

}

const PostActionMenu: React.FunctionComponent<IPostActionMenu> = (_props) => {
    return (
        <Menu 
            shadow="md" 
            position='bottom-end' 
            width={200}
            offset={0}
            closeOnClickOutside
        >
            <Menu.Target>
                <ActionIcon variant="subtle" color="#6b7280" size="lg" radius="xl" aria-label="Settings">
                    <BsThreeDots style={{ width: '70%', height: '70%' }} />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection={<IoBookmarkOutline style={{ width: rem(16), height: rem(16) }} />}>
                    Add to favorites
                </Menu.Item>
                <Menu.Item leftSection={<IoNotificationsOffOutline style={{ width: rem(16), height: rem(16) }} />}>
                    Mute notifications
                </Menu.Item>
                <Menu.Item leftSection={<IoFlagOutline style={{ width: rem(16), height: rem(16) }} />}>
                    Report this post
                </Menu.Item>
                <Menu.Item leftSection={<IoShareOutline style={{ width: rem(16), height: rem(16) }} />}>
                    Share to others
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                    color="red"
                    leftSection={<IoStopCircleOutline style={{ width: rem(16), height: rem(16) }} />}
                >
                    Un follow
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export {
    PostActionMenu
}