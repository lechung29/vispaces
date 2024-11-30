import React, { useMemo } from 'react'
import { FollowButtonState } from '../newfolloweritem'
import { useImmerState } from '@/hooks/useImmerState'
import { motion } from "framer-motion"
import { Avatar, Button, Loader, Title } from '@mantine/core'
import { IFunc } from '@/types/Function'
import { classNames, delay } from '@/utils'

interface ISearchItemProps {
    isFollowed?: boolean
}

interface ISearchItemState {
    followStatus: FollowButtonState
}

const initialState: ISearchItemState = {
    followStatus: FollowButtonState.NotFollow
}

const SearchItem: React.FunctionComponent<ISearchItemProps> = (props) => {
    const { isFollowed } = props;
    const [state, setState] = useImmerState<ISearchItemState>(initialState)
    const { followStatus } = state

    const followButtonProperties = useMemo(() => {
        let title: React.ReactNode
        let background: string = ""
        let textColor: string = ""
        switch (followStatus) {
            case FollowButtonState.Following:
                title = <Loader size={14} color="rgba(255, 255, 255, 1)" />
                background = "#228be6"
                textColor = "#fff"
                break;
            case FollowButtonState.Followed:
                title = <motion.div
                    whileInView={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                >
                    Followed
                </motion.div>
                background = "#40c057"
                textColor = "#fff"
                break;
            case FollowButtonState.NotFollow:
            default:
                title = <motion.div
                    whileInView={{
                        scale: [1, 1.07, 1]
                    }}
                    transition={{ duration: 2, delay: 0.5, ease: "linear", repeat: Infinity }}
                >
                    Follow
                </motion.div>
                background = "#f1f0f9"
                textColor = "#6b7280"
                break;
        }

        return {
            title,
            background,
            textColor
        }
    }, [followStatus])

    const onFollowUser: IFunc<Promise<void>> = () => {
        if (followStatus === FollowButtonState.Following) {
            return Promise.resolve()
        }
        setState({ followStatus: FollowButtonState.Following })
        return delay(2000)
            .then(() => setState({ followStatus: FollowButtonState.Followed }))
    }
    return (
        <motion.section className='w-full flex items-center justify-between hover:bg-[#f1f0f9] px-2 py-3 rounded-xl cursor-pointer'>
            <motion.figure className='w-auto flex items-center justify-start gap-3'>
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                    className='cursor-pointer'
                />
                <motion.div className='w-max flex flex-col'>
                    <Title className='!text-[14px] !font-semibold'>Bach Le</Title>
                    <Title className='!text-[12px] !text-[#6b7280] !font-medium'>Suggested For You</Title>
                </motion.div>
            </motion.figure>
            {!isFollowed && <Button
                className={classNames(`!px-3 !text-[${followButtonProperties.textColor}] overflow-hidden cursor-pointer !text-[12px] !w-[80px] !h-[32px] !py-[6px]`, {
                    "!cursor-not-allowed": followStatus === FollowButtonState.Following
                })}
                fw={500}
                variant='filled'
                radius={"xl"}
                onClick={onFollowUser}
                color={followButtonProperties.background}
            >
                {followButtonProperties.title}
            </Button>}
        </motion.section>
    )
}

export {
    SearchItem
}