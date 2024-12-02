import { CommonPost } from '@/components'
import NewPost from '@/components/newpost'
import StoryList from '@/components/storylist'
import React from 'react'
import { motion } from "framer-motion"
import { ScrollArea } from '@mantine/core'
import { OnlineFriend, PeopleMightKnow } from '@/components'

interface IHomePageProps {

}

const HomeView: React.FunctionComponent<IHomePageProps> = (_props) => {
    return (
        <motion.section className='h-full w-auto mx-auto px-5 py-10 relative'>
            <motion.article className='story-part h-full w-full'>
                <StoryList />
            </motion.article>
            <motion.section className='content-part my-12 px-14 w-full h-auto flex justify-center items-start gap-10'>
                <motion.article className='w-[60%] h-auto flex items-center justify-center flex-col gap-7'>
                    <NewPost />
                    <CommonPost />
                    <CommonPost />
                    <CommonPost />

                </motion.article>
                <motion.article className='w-[40%] h-auto sticky top-4'>
                    <ScrollArea h={"100vh"} w={"100%"} type='never'>
                        <motion.section className='flex items-center justify-center flex-col gap-7 pb-10'>
                            <PeopleMightKnow />
                            <OnlineFriend />
                        </motion.section>
                    </ScrollArea>
                </motion.article>
            </motion.section>
        </motion.section>
    )
}

export {
    HomeView as Home
}