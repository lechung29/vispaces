import React from 'react'
import { motion } from "framer-motion"
import { ActionIcon, Avatar, Divider, ScrollArea, Title } from '@mantine/core'
import "./index.scss"
import { IoSettingsOutline } from "react-icons/io5";
import { MessageItem, TextInput } from '@/components';
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiInfo } from "react-icons/pi";

interface IMessagePageProps { }

const MessagePage: React.FunctionComponent<IMessagePageProps> = (_props) => {
    return (
        <motion.section className='h-full w-full flex items-center justify-center'>
            <motion.article className='chat-message-sidebar w-[360px] h-screen'>
                <motion.section className='w-full h-auto px-5 pt-6'>
                    <motion.figure className='w-full h-auto flex items-center justify-between'>
                        <Title className='w-auto h-auto !text-[26px]'>Chats</Title>
                        <ActionIcon
                            variant="transparent"
                            size="lg"
                            color='#6b7280'
                            aria-label="Settings"
                        >
                            <IoSettingsOutline style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                    </motion.figure>
                    <motion.article className='w-full h-auto my-3'>
                        <TextInput
                            variant='filled'
                            placeholder='Search'
                            haveSearchIcon
                            value=''
                            size='sm'
                            onChange={() => console.log("1134")}
                        />
                    </motion.article>
                </motion.section>
                <Divider className='w-full' my="md" size={"xs"} />
                <motion.section className='w-full h-auto px-2'>
                    <ScrollArea w={"344px"} h={"calc(100vh - 140px)"} type='never'>
                        <motion.section className='flex items-center justify-center w-full flex-col gap-4'>
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                            <MessageItem />
                        </motion.section>
                    </ScrollArea>
                </motion.section>
            </motion.article>
            <motion.article className='chat-message-content flex-1 w-full h-screen'>
                <motion.section className='chat-message-content-header w-full h-auto flex items-center justify-between px-6 py-3'>
                    <motion.figure className='chat-message-content-header-username w-auto flex items-center justify-center gap-4'>
                        <Avatar
                            src="/src/assets/avatar.jpg"
                            alt="it's me"
                            size="md"
                            className='cursor-pointer'
                        />
                        <motion.figcaption className='flex flex-col'>
                            <motion.p className='font-bold text-[#4b5563] text-[15px] tracking-wide'>Killian Le</motion.p>
                            <motion.p className='font-bold text-green-500 text-[12px]'>Online</motion.p>
                        </motion.figcaption>
                    </motion.figure>
                    <motion.section className='flex items-center justify-center gap-2'>
                        <ActionIcon
                            variant="subtle"
                            size="lg"
                            radius="xl"
                            color='#6b7280'
                            aria-label="Call"
                        >
                            <IoCallOutline style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                        <ActionIcon
                            variant="subtle"
                            size="lg"
                            radius="xl"
                            color='#6b7280'
                            aria-label="Video"
                        >
                            <HiOutlineVideoCamera style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                        <ActionIcon
                            variant="subtle"
                            size="lg"
                            radius="xl"
                            color='#6b7280'
                            aria-label="Info"
                        >
                            <PiInfo style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                    </motion.section>
                </motion.section>
                <Divider className='w-full' my="0" mb="md" size={"xs"} />
            </motion.article>
        </motion.section>
    )
}

export {
    MessagePage
}