/** @format */

import React from "react";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { CreatePostDialog } from "../createpostdialog";
import "./index.scss"
import { defaultIconStyle, IconButton } from "../common";

interface INewPostProps {}

const NewPost: React.FunctionComponent<INewPostProps> = (_props) => {
    return (
        <section className="g-new-post-section">
            <CreatePostDialog 
                triggerButton={<div className="g-new-post-section-text">
                    What do you have in mind?
                </div>} 
            />
            <CreatePostDialog 
                triggerButton={<IconButton
                    iconElement={<FaImage style={defaultIconStyle}/>}
                    variant="soft" 
                    size="3" 
                    radius="medium" 
                    aria-label="Upload Photo" 
                    className="g-new-post-section-button-photo"
                />} 
            />
            <CreatePostDialog 
                triggerButton={<IconButton
                    iconElement={<FaVideo style={defaultIconStyle}/>}
                    variant="soft" 
                    size="3" 
                    radius="medium" 
                    aria-label="Upload Video" 
                    className="g-new-post-section-button-video" 
                />} 
            />
        </section>
    );
};

export { NewPost };
