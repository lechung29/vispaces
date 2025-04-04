import React from "react"
import { FollowButtonState } from "../newfolloweritem"
import { useImmerState } from "@/hooks/useImmerState"
import { motion } from "framer-motion"
import { IFunc } from "@/types/Function"
import { delay } from "@/utils"
import "./index.scss"
import { Avatar, SubmitButton, Text } from "../common"

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

    const followButtonProperties = React.useMemo(() => {
        let title: React.ReactNode
        let background: string = ""
        let textColor: string = ""
        switch (followStatus) {
            case FollowButtonState.Following:
                // title = <Loader size={14} color="rgba(255, 255, 255, 1)" />
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
        <section className="g-search-item-section">
            <div className="g-search-item-section-info">
                <Avatar
                    src="/src/assets/avatar.jpg"
                    alt="its me"
                    avatarName="Bach Le"
                />
                <div className="g-search-item-section-info-text">
                    <Text 
                        as="p"
                        fontSize={14}
                        fw={500}
                        displayText="Bach Le"
                    />
                    <Text 
                        as="p"
                        fontSize={12}
                        fw={500}
                        displayText="Suggested For You"
                    />
                </div>
            </div>
            {!isFollowed && <SubmitButton
                className="g-search-item-section-action"
                disabled={followStatus === FollowButtonState.Following}
                style={{
                    background: followButtonProperties.background,
                    color: followButtonProperties.textColor
                }}
                buttonHeight={32}
                buttonWidth={80}
                onClick={onFollowUser}
                children={followButtonProperties.title}
            />}
        </section>
    )
}

export {
    SearchItem
}