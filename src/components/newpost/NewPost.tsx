/** @format */

import React from "react";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { CreatePostDialog } from "../createpostdialog";
import "./index.scss"
import { bigIconStyle, IconButton } from "../common";

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
                    iconElement={<FaImage style={bigIconStyle}/>}
                    variant="soft" 
                    size="3" 
                    radius="large" 
                    aria-label="Upload Photo"  
                />} 
            />
            <CreatePostDialog 
                triggerButton={<IconButton
                    iconElement={<FaVideo style={bigIconStyle}/>}
                    variant="soft" 
                    size="3" 
                    radius="large" 
                    aria-label="Upload Photo"  
                />} 
            />
        </section>
    );
};

export default NewPost;
