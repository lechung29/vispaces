import { IAction } from '@/types/Function';
import React from 'react'
import { Modal, Textarea, Title } from '@mantine/core';
import { TbClockHour3 } from "react-icons/tb";
import { AnimatedButton } from '../animatedComponent';

interface ICreatePostDialog {
    isOpen: boolean
    onClose: IAction
    title: string;
    onSave: IAction
}

const CreatePostDialog: React.FunctionComponent<ICreatePostDialog> = (props) => {
    const { isOpen, onClose, title, onSave } = props;
    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            title={title}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            centered
            size={"lg"}
        >
            <div className='w-full h-auto'>
                <div className='message-status w-full my-2'>
                    <Textarea
                        label="What do you have in mind?"
                        placeholder="Please enter your mind here..."
                        radius="md"
                        autosize
                        minRows={4}
                        maxRows={4}
                    />
                </div>
                <div className='action-footer w-full mt-4 mb-2 flex items-center justify-between'>
                    <div className='footer-note flex justify-center items-center w-[50%] gap-2'>
                        <TbClockHour3 size={30} color='#0284c7' />
                        <Title className='!text-[14px] text-[#4b5563] flex-1 !font-medium'>
                            Your Status will be available for 24 Hours
                        </Title>
                    </div>
                    <div className='footer-buttons flex justify-end items-center w-[50%]'>
                        <AnimatedButton
                            className='py-2 px-8 bg-[#3b82f6] disabled:cursor-not-allowed w-auto h-auto text-white font-medium items-center rounded-lg'
                            whileHover={{
                                scale: 1.025,
                                transition: {
                                    type: "spring",
                                    stiffness: 1000,
                                }
                            }}
                            onClick={onSave}
                        >
                            Create
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CreatePostDialog