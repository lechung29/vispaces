import React from 'react'
import { Avatar, Title } from '@mantine/core'
import { motion } from "framer-motion"
import { classNames } from '@/utils'

interface IOnlineFriendItemProps {

}

const OnlineFriendItem: React.FunctionComponent<IOnlineFriendItemProps> = (_props) => {
    return (
        <motion.section className='w-full flex items-center justify-between'>
            <motion.figure className='w-auto flex items-center justify-start gap-3'>
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                    className='cursor-pointer'
                />
                <Title className='!text-[14px] !font-semibold'>Bach Le</Title>
            </motion.figure>
            <motion.article className='w-auto flex items-center justify-start gap-3'>
                <Title className={classNames('!text-[14px] !font-semibold', {
                    "text-green-500": true
                })}>Online</Title>
            </motion.article>
        </motion.section>
    )
}

export {
    OnlineFriendItem
}