import React from 'react'
import { motion } from "framer-motion"
import { ActionIcon, Divider, ScrollArea, Title } from '@mantine/core'
import "./index.scss"
import { IoSettingsOutline } from "react-icons/io5";
import SearchInput from '@/components/common/searchinput';
import { MessageItem } from '@/components';

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
                        <SearchInput
                            placeholder='Search'
                            leftSection
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
                        </motion.section>
                    </ScrollArea>
                </motion.section>
            </motion.article>
            <motion.article className='flex-1 w-full'>
                Hello
            </motion.article>
        </motion.section>
    )
}

export {
    MessagePage
}