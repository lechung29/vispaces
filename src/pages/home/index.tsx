import NewPost from '@/components/newpost'
import StoryList from '@/components/storylist'
import React from 'react'

interface IHomePageProps {

}

const Home: React.FunctionComponent<IHomePageProps> = (_props) => {
    return (
        <div className='h-full w-auto mx-auto px-6'>
            <div className='story-part h-full w-full'>
                <StoryList />
            </div>
            <div className='content-part my-12 px-14 w-full h-auto flex justify-center items-center gap-10'>
                <div className='w-[50%] h-auto'>
                    <NewPost />
                </div>
                <div className='w-[50%] h-auto'>
                    123
                </div>
            </div>
        </div>
    )
}

export default Home