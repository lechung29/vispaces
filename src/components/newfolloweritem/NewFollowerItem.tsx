import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { useImmerState } from "@/hooks/useImmerState"
import { delay } from "@/utils"
import { Button } from "@radix-ui/themes"
import "./index.scss"
import { Avatar, Text } from "../common"
import { LoadingIcon } from "../icons"

interface INewFollowerItemProps {

}

interface INewFollowerItemState {
    followStatus: FollowButtonState
}

enum FollowButtonState {
    NotFollow,
    Following,
    Followed
}

const initialState: INewFollowerItemState = {
    followStatus: FollowButtonState.NotFollow
}

const NewFollowerItem: React.FunctionComponent<INewFollowerItemProps> = (_props) => {
    const [state, setState] = useImmerState<INewFollowerItemState>(initialState)
    const { followStatus } = state

    const followButtonProperties = useMemo(() => {
        let title: React.ReactNode
        let background: string = ""
        let textColor: string = ""
        switch (followStatus) {
            case FollowButtonState.Following:
                title = <LoadingIcon 
                    size={14}
                    color="white"
                    fontWeight={400}
                    withLoadingText={false}
                />
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
                        x: [-32, 32],
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

    const onFollowUser = async () => {
        if (followStatus === FollowButtonState.Following) {
            return Promise.resolve()
        }
        setState({ followStatus: FollowButtonState.Following })
        return delay(2000).then(() => setState({ followStatus: FollowButtonState.Followed }))
    }

    return (
        <section className="g-new-follower-item-section">
            <div className="g-new-follower-item-userInfo">
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="its me"
                    avatarName="Bach Le"
                />
                <div className="g-new-follower-item-userInfo-info">
                    <Text 
                        className="g-new-follower-item-userInfo-info-text"
                        displayText="Bach Le"
                        as="p"
                        fontSize={14}
                        fw={500}
                    />
                    <Text 
                        className="g-new-follower-item-userInfo-info-text"
                        displayText="Suggested For You"
                        as="p"
                        fontSize={12}
                        fw={500}    
                    />
                </div>
            </div>
            <Button
                className="g-new-follower-item-action-button"
                style={{
                    backgroundColor: followButtonProperties.background,
                    color: followButtonProperties.textColor,
                    "--button-cursor": followStatus === FollowButtonState.Following ? "not-allowed" : "pointer"
                } as React.CSSProperties}
                variant="soft"
                radius="full"
                onClick={onFollowUser}
            >
                {followButtonProperties.title}
            </Button>
        </section>
    )
}

export {
    NewFollowerItem,
    FollowButtonState
}