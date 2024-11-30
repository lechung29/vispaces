import React from 'react'
import { motion } from "framer-motion"
import { Avatar, Indicator, Title } from '@mantine/core'
import { IFunc } from '@/types/Function'

interface ISearchItemProps {
    isRead: boolean
}

// interface ISearchItemState {

// }

// const initialState: ISearchItemState = {
//     followStatus: FollowButtonState.NotFollow
// }

const NotificationItem: React.FunctionComponent<ISearchItemProps> = (props) => {
    const [isRead, setIsRead] = React.useState<boolean>(props?.isRead)
    // const [state, setState] = useImmerState<ISearchItemState>(initialState)

    const onRead: IFunc<Promise<void>> = () => {
        setIsRead(true)
        return Promise.resolve()
        // if (followStatus === FollowButtonState.Following) {
        //     return Promise.resolve()
        // }
        // setState({ followStatus: FollowButtonState.Following })
        // return delay(2000)
        //     .then(() => setState({ followStatus: FollowButtonState.Followed }))
    }

    const onRenderItem: IFunc<JSX.Element> = () => {
        const children: JSX.Element = <motion.section 
            className='w-full flex items-center justify-between hover:bg-[#f1f0f9] px-2 py-3 rounded-xl cursor-pointer'
            onClick={onRead}
        >
            <motion.figure className='w-auto flex items-center justify-start gap-3'>
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                    className='cursor-pointer'
                />
                <motion.div className='w-full flex flex-col'>
                    <Title className='!text-[14px] !font-semibold'>Killian mentioned you in a comment, Killian mentioned you in a comment</Title>
                    <Title className='!text-[12px] !text-[#6b7280] !font-medium'>4 hours ago</Title>
                </motion.div>
            </motion.figure>
        </motion.section>

        return isRead ? children : <Indicator
            inline
            size={14} 
            offset={20}
            disabled={isRead}
            position="middle-end" 
            color="blue" 
            withBorder
        >
            {children}
        </Indicator>
    }
    return onRenderItem()
}

export {
    NotificationItem
}