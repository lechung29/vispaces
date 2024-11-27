import CommonPost from '@/components/commonpost'
import NewPost from '@/components/newpost'
import PeopleMightKnow from '@/components/peopleyoumightknow'
import StoryList from '@/components/storylist'
import React from 'react'
import { motion } from "framer-motion"
import { ScrollArea } from '@mantine/core'
import OnlineFriend from '@/components/onlinefriend'

interface IHomePageProps {

}

const Home: React.FunctionComponent<IHomePageProps> = (_props) => {
    return (
        <motion.div className='h-full w-auto mx-auto px-6 relative'>
            <motion.div className='story-part h-full w-full'>
                <StoryList />
            </motion.div>
            <motion.div className='content-part my-12 px-14 w-full h-auto flex justify-center items-start gap-10'>
                <motion.div className='w-[60%] h-auto flex items-center justify-center flex-col gap-7'>
                    <NewPost />
                    <CommonPost />
                    <CommonPost />
                    <CommonPost />

                </motion.div>
                <motion.div className='w-[40%] h-auto sticky top-4'>
                    <ScrollArea h={"100vh"} w={"100%"} type='never'>
                        <motion.div className='flex items-center justify-center flex-col gap-7 pb-10'>
                            <PeopleMightKnow />
                            <OnlineFriend />
                        </motion.div>
                    </ScrollArea>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Home