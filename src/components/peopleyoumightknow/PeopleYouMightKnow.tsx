/** @format */

import { classNames } from "@/utils";
import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import { NewFollowerItem } from "../newfolloweritem";
import "./index.scss";
import { defaultIconStyle, IconButton, Text } from "../common";

interface IPeopleMightKnowProps {}

const PeopleMightKnow: React.FunctionComponent<IPeopleMightKnowProps> = (_props) => {
    const [isRefresh, setIsRefresh] = React.useState(false);
    return (
        <section className="g-people-might-you-know-section">
            <div className="g-people-might-you-know-section-header">
                <Text 
                    displayText="People You might know"
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
            <div className="g-people-might-you-know-section-content">
                <NewFollowerItem />
                <NewFollowerItem />
                <NewFollowerItem />
                <NewFollowerItem />
                <NewFollowerItem />
            </div>
        </section>
    );
};

export { PeopleMightKnow };
