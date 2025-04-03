/** @format */

import React from "react";
import { useImmerState } from "@/hooks/useImmerState";
import { FollowButtonState } from "../newfolloweritem";
import { delay } from "@/utils";
import './index.scss'
import { Avatar, Text } from "../common";

interface ISearchItemProps {
    isRead: boolean;
}

interface ISearchItemState {
    followStatus: FollowButtonState;
}

const initialState: ISearchItemState = {
    followStatus: FollowButtonState.NotFollow,
};

const NotificationItem: React.FunctionComponent<ISearchItemProps> = (props) => {
    const [isRead, setIsRead] = React.useState<boolean>(props?.isRead);
    const [state, setState] = useImmerState<ISearchItemState>(initialState);
    const { followStatus } = state;

    const onRead = () => {
        setIsRead(true);
        if (followStatus === FollowButtonState.Following) {
            return Promise.resolve();
        }
        setState({ followStatus: FollowButtonState.Following });
        return delay(2000).then(() => setState({ followStatus: FollowButtonState.Followed }));
    };

    React.useEffect(() => {
        console.log(isRead)
    }, [isRead])

    return (
        <section className="g-notification-item-section" onClick={onRead}>
            <div className="g-notification-item-section-info">
                <Avatar 
                    src="/src/assets/avatar.jpg"
                    alt="it's me"
                    avatarName="Killian" 
                />
                <div className="g-notification-item-section-info-content">
                    <Text 
                        className="g-notification-item-section-info-content-text"
                        fontSize={14}
                        fw={500}
                        displayText="Killian mentioned you in a comment, Killian mentioned you in a comment" 
                    />
                    <Text 
                        className="g-notification-item-section-info-content-text"
                        fontSize={14}
                        fw={500}
                        displayText="4 hours ago" 
                    />
                </div>
            </div>
        </section>
    );
};

export { NotificationItem };
