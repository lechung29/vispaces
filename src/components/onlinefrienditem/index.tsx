import React from 'react'
import { motion } from "framer-motion"
import { classNames } from '@/utils'
import { Text } from '@radix-ui/themes'

interface IOnlineFriendItemProps {

}

const OnlineFriendItem: React.FunctionComponent<IOnlineFriendItemProps> = (_props) => {
    return (
        <motion.section className='w-full flex items-center justify-between'>
            <motion.figure className='w-auto flex items-center justify-start gap-3'>
                {/* <Indicator 
                    inline
                    offset={5}
                    withBorder
                    processing
                    color='green' 
                    size={12} 
                    position="bottom-end"
                >
                    <Avatar
                        src="/src/assets/avatar.jpg"
                        alt="it's me"
                        className='cursor-pointer'
                    />
                </Indicator> */}
                <Text className='!text-[14px] !font-semibold'>Bach Le</Text>
            </motion.figure>
            <motion.article className='w-auto flex items-center justify-start gap-3'>
                <Text className={classNames('!text-[14px] !font-semibold', {
                    "text-green-500": true
                })}>Online</Text>
            </motion.article>
        </motion.section>
    )
}

export {
    OnlineFriendItem
}