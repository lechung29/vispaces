import React from "react"
import { LuRefreshCw } from "react-icons/lu";
import { classNames } from "@/utils";
import { OnlineFriendItem } from "../onlinefrienditem";
import { defaultIconStyle, IconButton, Text, TextField } from "../common";
import { ScrollArea } from "@radix-ui/themes";
import "./index.scss"


interface IOnlineFriendProps {

}

const OnlineFriend: React.FunctionComponent<IOnlineFriendProps> = (_props) => {
    const [isRefresh, setIsRefresh] = React.useState(false)
    return (
        <section className="g-online-friend-section">
            <div className="g-online-friend-section-header">
                <Text 
                    displayText="Fiends"
                    as="p"
                    fontSize={16}
                    fw={500}
                />
                <IconButton
                    size="3"
                    radius="full"
                    onClick={() => setIsRefresh(!isRefresh)}
                    iconElement={<LuRefreshCw
                        style={defaultIconStyle}
                        className={classNames({ "animate-spin-360": isRefresh })}
                    />}
                />
            </div>
            <div className="g-online-friend-section-searchField">
                <TextField
                    placeholder="Search your friends"
                    // leftSection
                    haveSearchIcon
                    radius="full"
                    value=""
                    onChange={() => console.log("1134")}
                />
            </div>
            <section className="g-online-friend-section-onlineItem">
                <ScrollArea 
                    className="g-online-friend-scrollbar"
                    size="1" 
                    type="scroll" 
                    scrollbars="vertical"
                    scrollHideDelay={1000}
                    style={{
                        height: "100%", 
                    }}
                >
                    <div className="g-online-friend-section-onlineItem-item">
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                        <OnlineFriendItem />
                    </div>
                </ScrollArea>
            </section>
        </section>
    )
}

export {
    OnlineFriend
}