/** @format */

import React from "react";
import "./index.scss";
import { Avatar } from "../common";
import { motion } from "framer-motion";

export interface IStoryAvatarProps {
    className?: string
}

const StoryAvatar: React.FunctionComponent<IStoryAvatarProps> = (props) => {
    const { className } = props;
    return (
        <motion.div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
            whileHover={{
                scale: 1.25,
            }}
        >
            <Avatar
                src="/src/assets/avatar.jpg"
                size="6"
                alt="its me"
                avatarName="Killian Le"
                className={className}
                // onClick={}
            />
        </motion.div>
    );
};

export { StoryAvatar };
