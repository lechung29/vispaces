import React, { useState } from 'react'
import { motion } from "framer-motion"
import { ScrollArea, Title } from '@mantine/core'
import { LuRefreshCw } from "react-icons/lu";
import { classNames } from '@/utils';
import { OnlineFriendItem } from '../onlinefrienditem';
import SearchInput from '../common/searchinput';

interface IOnlineFriendProps {

}

const OnlineFriend: React.FunctionComponent<IOnlineFriendProps> = (_props) => {
    const [isRefresh, setIsRefresh] = useState(false)
    return (
        <motion.section className='w-full h-auto bg-white py-4 px-6 rounded-lg drop-shadow-sm'>
            <motion.header className='w-full flex items-center justify-between mb-3'>
                <Title className='!text-[16px] !font-semibold'>Friends</Title>
                <LuRefreshCw
                    size={18}
                    onClick={() => setIsRefresh(!isRefresh)}
                    className={classNames("cursor-pointer", { "animate-spin-360": isRefresh })}
                />
            </motion.header>
            <motion.article className='w-full flex items-center justify-between mb-3'>
                <SearchInput
                    placeholder='Search your friends'
                    leftSection
                    radius='lg'
                    value=''
                    onChange={() => console.log("1134")}
                />
            </motion.article>
            <motion.section className='w-full h-auto py-2'>
                <ScrollArea w={"100%"} h={"360px"} type='never'>
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