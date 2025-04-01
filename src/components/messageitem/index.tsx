import React from 'react'
import { motion } from "framer-motion"
import { Avatar, Text } from '@radix-ui/themes'

interface IMessageItemProps {

}

const MessageItem: React.FunctionComponent<IMessageItemProps> = (_props) => {
    return (
        <motion.section className='w-full h-auto px-3 py-2 gap-2 flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer'>
            <motion.figure className='w-auto flex items-center justify-center'>
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                    size="3"
                    className='cursor-pointer'
                    fallback
                />
            </motion.figure>
            <motion.section className='flex flex-1 flex-col gap-2'>
                <motion.figcaption className='w-full h-auto flex items-center justify-between'>
                    <Text className='!text-[14px] !font-medium tracking-wide'>Killian Le</Text>
                    <Text className='!text-[13px] !font-normal !text-[#6b7280]'>09:40 AM</Text>
                </motion.figcaption>
                <motion.figcaption className='w-full'>
                    <motion.p className='!text-[14px] w-[250px] !font-medium !text-[#6b7280] overflow-hidden whitespace-nowrap text-ellipsis'>Xin chào, tôi có thể nhắn tin cho bạn được không </motion.p>
                </motion.figcaption>
            </motion.section>
        </motion.section>
    )
}

export {
    MessageItem
}