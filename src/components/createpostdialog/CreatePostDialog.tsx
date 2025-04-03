/** @format */

import { IAction } from "@/types/Function";
import React from "react";
import { TbClockHour3 } from "react-icons/tb";
import { TextArea } from "@radix-ui/themes";
import { Dialog } from "radix-ui";
import { AnimationSubmitButton, bigIconStyle, IconButton, Label, Text } from "../common";
import { AiOutlineClose } from "react-icons/ai";

interface ICreatePostDialog {
    triggerButton: JSX.Element;
    isOpen: boolean;
    onClose: IAction;
    title: string;
    onSave: IAction;
}

const CreatePostDialog: React.FunctionComponent<ICreatePostDialog> = (props) => {
    const { isOpen, triggerButton, title, onSave } = props;
    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Trigger asChild>{triggerButton}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="g-DialogOverlay" />
            </Dialog.Portal>
            <Dialog.Content className="g-DialogContent">
                <Dialog.Title className="g-DialogTitle">{title}</Dialog.Title>
                <div className="g-createPostDialog-content">
                    <div className="g-createPostDialog-message-status">
                        <Label displayText="What do you have in mind?" />
                        <TextArea 
                            placeholder="Please enter your mind here..." 
                            radius="full" 
                            rows={4} 
                        />
                    </div>
                    <div className="g-createPostDialog-action-footer">
                        <div className="g-createPostDialog-action-footer-note">
                            <TbClockHour3 style={bigIconStyle} />
                            <Text 
                                className="g-createPostDialog-action-footer-note-text"
                                displayText="Your Status will be available for 24 Hours"
                                fontSize={14}
                                fw={500}
                            />
                        </div>
                        <div className="g-createPostDialog-action-footer-buttons-list">
                            <AnimationSubmitButton
                                className="g-createPostDialog-action-footer-buttons-item"
                                displayText="Create"
                                buttonWidth="auto"
                                buttonHeight={32}
                                onClick={onSave}
                            />
                        </div>
                    </div>
                </div>
                <Dialog.Close asChild>
                    <IconButton 
                        aria-label="Close dialog"
                        size="4"
                        radius="full"
                        iconElement={<AiOutlineClose style={bigIconStyle}/>}
                    />
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export { CreatePostDialog };
