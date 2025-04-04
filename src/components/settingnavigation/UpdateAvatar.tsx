/** @format */

import React from "react";
import { IoCamera } from "react-icons/io5";
import "./updateavatar.scss";
import { Avatar } from "../common";

export interface IUpdateAvatarProps {}

const UpdateAvatar: React.FunctionComponent<IUpdateAvatarProps> = () => {
    return (
        <div className="g-change-avatar-section" onClick={() => console.log("success")}>
            <Avatar 
              src="/src/assets/avatar.jpg" 
              alt="its me" 
              size="7" 
              className="g-change-avatar-section-avatar "
              avatarName="Killian Le"
            />
            <IoCamera className="g-change-avatar-section-icon" />
        </div>
    );
};

export { UpdateAvatar };
