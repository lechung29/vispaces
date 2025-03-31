import React from 'react'
import { motion } from "framer-motion"
import "./index.scss"
import { IoSettingsOutline } from "react-icons/io5";
import { MessageItem, TextField } from '@/components';
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiInfo } from "react-icons/pi";
import { Avatar, IconButton, ScrollArea, Text } from '@radix-ui/themes';

interface IMessagePageProps { }

const MessagePage: React.FunctionComponent<IMessagePageProps> = (_props) => {
    return (
        <motion.section className='h-full w-full flex items-center justify-center'>
            <motion.article className='chat-message-sidebar w-[360px] h-screen'>
                <motion.section className='w-full h-auto px-5 pt-6'>
                    <motion.figure className='w-full h-auto flex items-center justify-between'>
                        <Text className='w-auto h-auto !text-[26px]'>Chats</Text>
                        <IconButton
                            // variant="transparent"
                            // size="lg"
                            // color='#6b7280'
                            aria-label="Settings"
                        >
                            <IoSettingsOutline style={{ width: '70%', height: '70%' }} />
                        </IconButton>
                    </motion.figure>
                    <motion.article className='w-full h-auto my-3'>
                        <TextField
                            variant="soft"
                            placeholder='Search'
                            haveSearchIcon
                            value=''
                            size="2"
                            onChange={() => console.log("1134")}
                        />
                    </motion.article>
                </motion.section>
                {/* <Divider className='w-full' my="md" size={"xs"} /> */}
                <motion.section className='w-full h-auto px-2'>
                    <ScrollArea type='hover'>
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
                            size="4"
                            className='cursor-pointer'
                            fallback={<></>}
                        />
                        <motion.figcaption className='flex flex-col'>
                            <motion.p className='font-bold text-[#4b5563] text-[15px] tracking-wide'>Killian Le</motion.p>
                            <motion.p className='font-bold text-green-500 text-[12px]'>Online</motion.p>
                        </motion.figcaption>
                    </motion.figure>
                    <motion.section className='flex items-center justify-center gap-2'>
                        <IconButton
                            // variant="subtle"
                            // size="lg"
                            // radius="xl"
                            // color='#6b7280'
                            aria-label="Call"
                        >
                            <IoCallOutline style={{ width: '70%', height: '70%' }} />
                        </IconButton>
                        <IconButton
                            // variant="subtle"
                            // size="lg"
                            // radius="xl"
                            // color='#6b7280'
                            aria-label="Video"
                        >
                            <HiOutlineVideoCamera style={{ width: '70%', height: '70%' }} />
                        </IconButton>
                        <IconButton
                            // variant="subtle"
                            // size="lg"
                            // radius="xl"
                            // color='#6b7280'
                            aria-label="Info"
                        >
                            <PiInfo style={{ width: '70%', height: '70%' }} />
                        </IconButton>
                    </motion.section>
                </motion.section>
                {/* <Divider className='w-full' my="0" mb="md" size={"xs"} /> */}
            </motion.article>
        </motion.section>
    )
}

export {
    MessagePage
}