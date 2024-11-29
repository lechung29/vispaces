import React from 'react'
import { AnimatedAvatar } from '../animatedComponent'

export interface IStoryAvatarProps {

}

const StoryAvatar: React.FunctionComponent<IStoryAvatarProps> = (_props) => {
    return (
        <AnimatedAvatar
            whileHover={{
                scale: 1.25
            }}
            className='cursor-pointer '
            src="avatar.png"
            size={"xl"}
            alt="it's me"
        // onClick={}
        />
    )
}

export {
    StoryAvatar
}