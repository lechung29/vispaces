import React from 'react'
import { motion } from "framer-motion"
import { Avatar, Title } from '@mantine/core'

interface IMessageItemProps {

}

const MessageItem: React.FunctionComponent<IMessageItemProps> = (_props) => {
    return (
        <motion.section className='w-full h-auto px-3 py-2 gap-2 flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer'>
            <motion.figure className='w-auto flex items-center justify-center'>
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                    size="lg"
                    className='cursor-pointer'
                />
            </motion.figure>
            <motion.section className='flex flex-1 flex-col'>
                <motion.figcaption className='w-full h-auto flex items-center justify-between'>
                    <Title className='!text-[14px] !font-medium tracking-wide'>Killian Le</Title>
                    <Title className='!text-[13px] !font-normal !text-[#6b7280]'>09:40 AM</Title>
                </motion.figcaption>
                <motion.figcaption className='w-full overflow-hidden'>
                    <span className='!text-[14px] !font-normal !text-[#30343c] overflow-hidden whitespace-nowrap text-ellipsis'>Xin chào, tôi có thể nhắn tin cho bạn được không</span>
                </motion.figcaption>
            </motion.section>
        </motion.section>
    )
}

export {
    MessageItem
}