/** @format */

import { IAction } from "@/types/Function";
import React from "react";
import { TbClockHour3 } from "react-icons/tb";
import { motion } from "framer-motion";
import { Text, TextArea } from "@radix-ui/themes";
import { Dialog } from "radix-ui";
import { bigIconStyle, IconButton, Label } from "../common";
import { AiOutlineClose } from "react-icons/ai";

interface ICreatePostDialog {
    triggerButton: JSX.Element;
    isOpen: boolean;
    onClose: IAction;
    title: string;
    onSave: IAction;
}

const CreatePostDialog: React.FunctionComponent<ICreatePostDialog> = (props) => {
    const { isOpen, triggerButton, onClose, title, onSave } = props;
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
                        <TextArea label="What do you have in mind?" placeholder="Please enter your mind here..." radius="full" rows={4} />
                    </div>
                    <motion.section className="action-footer w-full mt-4 mb-2 flex items-center justify-between">
                        <motion.section className="footer-note flex justify-center items-center w-[50%] gap-2">
                            <TbClockHour3 size={30} color="#0284c7" />
                            <Text className="!text-[14px] text-[#4b5563] flex-1 !font-medium">Your Status will be available for 24 Hours</Text>
                        </motion.section>
                        <motion.section className="footer-buttons flex justify-end items-center w-[50%]">
                            <AnimatedButton
                                className="py-2 px-8 bg-[#3b82f6] disabled:cursor-not-allowed w-auto h-auto text-white font-medium items-center rounded-lg"
                                whileHover={{
                                    scale: 1.025,
                                    transition: {
                                        type: "spring",
                                        stiffness: 1000,
                                    },
                                }}
                                onClick={onSave}
                            >
                                Create
                            </AnimatedButton>
                        </motion.section>
                    </motion.section>
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
