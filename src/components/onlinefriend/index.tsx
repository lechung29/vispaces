import React, { useState } from 'react'
import { motion } from "framer-motion"
import { LuRefreshCw } from "react-icons/lu";
import { classNames } from '@/utils';
import { OnlineFriendItem } from '../onlinefrienditem';
import { TextField } from '../common';
import { ScrollArea, Text } from '@radix-ui/themes';


interface IOnlineFriendProps {

}

const OnlineFriend: React.FunctionComponent<IOnlineFriendProps> = (_props) => {
    const [isRefresh, setIsRefresh] = useState(false)
    return (
        <motion.section className='w-full h-auto bg-white py-4 px-6 rounded-lg drop-shadow-sm'>
            <motion.header className='w-full flex items-center justify-between mb-3'>
                <Text className='!text-[16px] !font-semibold'>Friends</Text>
                <LuRefreshCw
                    size={18}
                    onClick={() => setIsRefresh(!isRefresh)}
                    className={classNames("cursor-pointer", { "animate-spin-360": isRefresh })}
                />
            </motion.header>
            <motion.article className='w-full flex items-center justify-between mb-3'>
                <TextField
                    placeholder='Search your friends'
                    // leftSection
                    haveSearchIcon
                    radius='full'
                    value=''
                    onChange={() => console.log("1134")}
                />
            </motion.article>
            <motion.section className='w-full h-auto py-2'>
                <ScrollArea type='hover'>
                    <motion.section className='flex items-center justify-center flex-col gap-4'>
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                    </motion.section>
                </ScrollArea>
            </motion.section>
        </motion.section>
    )
}

export {
    OnlineFriend
}