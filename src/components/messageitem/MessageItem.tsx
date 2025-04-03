import React from "react"
import "./index.scss"
import { Avatar, Text } from "../common"

interface IMessageItemProps {

}

const MessageItem: React.FunctionComponent<IMessageItemProps> = (_props) => {
    return (
        <section className="g-message-item-section">
            <div className="g-message-item-userAvatar">
                <Avatar
                    avatarName="Killian"
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                />
            </div>
            <div className="g-message-item-content">
                <div className="g-message-item-content-info">
                    <Text 
                        className="g-message-item-content-info-displayName" 
                        displayText="Killian Le"
                        fontSize={14}
                        fw={500}
                    />
                    <Text 
                        className="g-message-item-content-info-time" 
                        displayText="09:40 AM"
                        fontSize={13}
                        fw={400}
                    />
                </div>
                <div className="g-message-item-content-Message">
                    <Text 
                        className="g-message-item-content-Message-text"
                        displayText="Xin chào, tôi có thể nhắn tin cho bạn được không?"
                        as="p"
                        fontSize={14}
                        fw={500}
                    />
                </div>
            </div>
        </section>
    )
}

export {
    MessageItem
}