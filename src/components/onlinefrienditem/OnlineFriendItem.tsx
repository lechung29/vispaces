import React from "react"
import { classNames } from "@/utils"
import "./index.scss"
import { Text } from "../common"

interface IOnlineFriendItemProps {

}

const OnlineFriendItem: React.FunctionComponent<IOnlineFriendItemProps> = (_props) => {
    return (
        <section className="g-online-friend-item-section">
            <div className="g-online-friend-item-section-user">
                {/* <Indicator 
                    inline
                    offset={5}
                    withBorder
                    processing
                    color="green" 
                    size={12} 
                    position="bottom-end"
                >
                    <Avatar
                        src="/src/assets/avatar.jpg"
                        alt="it"s me"
                        className="cursor-pointer"
                    />
                </Indicator> */}
                <Text 
                    className="g-online-friend-item-section-user-text"
                    as="p"
                    displayText="Bach Le"
                    fw={500}
                    fontSize={14}
                />
            </div>
            <div className="g-online-friend-item-section-status">
                <Text 
                    className={classNames("g-online-friend-item-section-status-text", {"text-green-500": true})}
                    as="p"
                    displayText="Online"
                    fw={500}
                    fontSize={14}
                />
            </div>
        </section>
    )
}

export {
    OnlineFriendItem
}