import { classNames } from '@/utils';
import { Title } from '@mantine/core'
import React, { useState } from 'react'
import { LuRefreshCw } from "react-icons/lu";
import { motion } from "framer-motion"
import NewFollowerItem from '../newfolloweritem';

interface IPeopleMightKnowProps {

}

const PeopleMightKnow: React.FunctionComponent<IPeopleMightKnowProps> = (_props) => {
    const [isRefresh, setIsRefresh] = useState(false)
    return (
        <motion.div className='w-full h-auto bg-white py-4 px-6 rounded-lg drop-shadow-sm'>
            <motion.div className='w-full flex items-center justify-between mb-3'>
                <Title className='!text-[16px] !font-semibold'>People You might know</Title>
                <LuRefreshCw
                    size={18}
                    onClick={() => setIsRefresh(!isRefresh)}
                    className={classNames("cursor-pointer", { "animate-spin-360": isRefresh })}
                />
            </motion.div>
            <motion.div className='w-full py-2 flex items-center justify-center flex-col gap-4'>
                <NewFollowerItem />
                <NewFollowerItem />
                <NewFollowerItem />
                <NewFollowerItem />
                <NewFollowerItem />
            </motion.div>
        </motion.div>
    )
}

export default PeopleMightKnow