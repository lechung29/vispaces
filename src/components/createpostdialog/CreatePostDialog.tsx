/** @format */

import React from "react";
import { TbClockHour3 } from "react-icons/tb";
import { TextArea } from "@radix-ui/themes";
import { Dialog, Separator } from "radix-ui";
import { AnimationSubmitButton, bigIconStyle, defaultIconStyle, IconButton, Label, Text } from "../common";
import { AiOutlineClose } from "react-icons/ai";
import "./index.scss";

interface IDialogProps {
    triggerButton: JSX.Element;
}

const CreatePostDialog: React.FunctionComponent<IDialogProps> = (props) => {
    const { triggerButton } = props;
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {triggerButton}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Create Status</Dialog.Title>
                    <Separator.Root className="SeparatorRoot" />
                    <div className="g-createPostDialog-content">
                        <div className="g-createPostDialog-message-status">
                            <Label className="g-createPostDialog-message-status-label" displayText="What do you have in mind?" />
                            <TextArea placeholder="Please enter your mind here..." radius="full" rows={4} />
                        </div>
                        <div className="g-createPostDialog-action-footer">
                            <div className="g-createPostDialog-action-footer-note">
                                <TbClockHour3 style={bigIconStyle} />
                                <Text className="g-createPostDialog-action-footer-note-text" displayText="Your Status will be available for 24 Hours" fontSize={14} fw={500} />
                            </div>
                            <div className="g-createPostDialog-action-footer-buttons-list">
                                <AnimationSubmitButton
                                    className="g-createPostDialog-action-footer-buttons-item"
                                    displayText="Create"
                                    buttonWidth="auto"
                                    buttonHeight={32}
                                    onClick={() => console.log("Save")}
                                />
                            </div>
                        </div>
                    </div>
                    <Dialog.Close asChild>
                        <IconButton aria-label="Close dialog" size="3" radius="full" className="IconButton" iconElement={<AiOutlineClose style={defaultIconStyle} />} />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export { CreatePostDialog };
