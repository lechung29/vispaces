import { ActionIcon, Avatar, Badge, CloseButton, Divider, Image, Input, Title, Tooltip } from '@mantine/core'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import PostActionMenu from '../postactionmenu'
import { FaImage } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { IoHeartSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { classNames } from '@/utils';
import { IoIosArrowDown } from "react-icons/io";
import { AnimatedButton } from '../animatedComponent';

interface ICommonPostProps {

}

const CommonPost: React.FunctionComponent<ICommonPostProps> = (_props) => {
    const [isLike, setIsLike] = useState(false)
    const [isOpenComment, setIsOpenComment] = useState(false)
    const [commentValue, setCommentValue] = useState("")
    const badgeRef = useRef<HTMLDivElement | null>()
    const handleLikeClick = () => {
        setIsLike(!isLike)
    }

    useEffect(() => {
        console.log(badgeRef.current)
    }, [badgeRef.current])

    const handleCommentClick = () => {
        setIsOpenComment(!isOpenComment)
    }
    return (
        <div className='bg-white h-auto w-full p-4 rounded-lg drop-shadow-sm flex items-center justify-center flex-col gap-4'>
            <div className='post-basic-info-row w-full flex items-center justify-between'>
                <div className='post-author-info flex items-center justify-center gap-3'>
                    <Avatar
                        src="/src/assets/avatar.jpg"
                        alt="it's me"
                        className='cursor-pointer'
                    />
                    <div className='flex flex-col'>
                        <Title className='!text-[14px] !font-semibold'>Killian Le</Title>
                        <Title className='!text-[12px] !font-medium !text-[#6b7280]'>2 hours ago</Title>
                    </div>
                </div>
                <div className='post-action-menu flex items-center justify-center'>
                    <PostActionMenu />
                </div>
            </div>
            <div className='post-content-row w-full flex flex-col gap-3'>
                <Title className='!text-[13px] !font-normal' >Tôi buồn ngủ quá</Title>
                <PhotoProvider>
                    <PhotoView src="/src/assets/b38bfc6b-06f6-4336-9487-bdd473466643.jpg">
                        <Image
                            radius="md"
                            h="auto"
                            w="100%"
                            fit="cover"
                            className='cursor-pointer'
                            // src="/src/assets/background.jpg"
                            src="/src/assets/b38bfc6b-06f6-4336-9487-bdd473466643.jpg"
                        />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='post-action-row w-full flex items-center justify-between'>
                <div className='flex items-center justify-center gap-2'>
                    <div className='flex items-center justify-center gap-1'>
                        <Tooltip
                            withArrow
                            transitionProps={{ duration: 200 }}
                            label="Like"
                        >
                            <ActionIcon
                                variant="light"
                                size="md"
                                radius="xl"
                                color={isLike ? "red" : "#6b7280"}
                                aria-label="Like"
                                onClick={handleLikeClick}
                            >
                                <IoHeartSharp size={20} />
                            </ActionIcon>
                        </Tooltip>
                        <Title className='post-total-like !text-[#6b7280] !font-medium !text-[13px]'>1,380</Title>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <Tooltip
                            withArrow
                            transitionProps={{ duration: 200 }}
                            label="Comment"
                        >
                            <ActionIcon
                                variant="light"
                                size="md"
                                radius="xl"
                                color={isOpenComment ? "blue" : "#6b7280"}
                                aria-label="Like"
                                onClick={handleCommentClick}
                            >
                                <FaCommentDots size={20} />
                            </ActionIcon>
                        </Tooltip>
                        <Title className='post-total-like !text-[#6b7280] !font-medium !text-[13px]'>260</Title>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Tooltip
                        withArrow
                        transitionProps={{ duration: 200 }}
                        label="Share"
                    >
                        <ActionIcon
                            variant="subtle"
                            size="md"
                            radius="xl"
                            color={"#6b7280"}
                            aria-label="Like"
                        >
                            <IoShareOutline size={20} />
                        </ActionIcon>
                    </Tooltip>
                </div>
            </div>
            {isOpenComment && <Fragment>
                <Divider className='w-full' my="0" size={"xs"} />
                <div className='post-comment-section w-full flex flex-col gap-2'>
                    <div className='comment-item w-full flex items-start justify-center gap-3'>
                        <Avatar
                            size={"sm"}
                            src="/src/assets/avatar.jpg"
                            alt="it's me"
                            className='cursor-pointer'
                        />
                        <div className='flex flex-col flex-1 gap-1'>
                            <div className='flex flex-col w-max px-3 py-2 bg-[#e7e8e8] rounded-2xl relative'>
                                <Title className='!text-[14px] !font-semibold'>Killian Le</Title>
                                <Title className='!text-[14px] !font-normal'>Wow, You are so talented and creative.</Title>
                                <Badge
                                    className={`absolute right-[-25px] bottom-[-10px]`}
                                    color="blue"
                                >
                                    <div className='flex items-center justify-center gap-1'>
                                        <AiFillLike />
                                        <span>100</span>
                                    </div>
                                </Badge>
                            </div>
                            <div className='flex items-center justify-start gap-4 w-full'>
                                <Title className={classNames('!text-[12px] cursor-pointer !font-medium', { "!text-[#6b7280]": true })}>Like</Title>
                                <Title className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Edit</Title>
                                <Title className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Delete</Title>
                            </div>
                        </div>
                    </div>
                    <div className='comment-item w-full flex items-start justify-center gap-3'>
                        <Avatar
                            size={"sm"}
                            src="/src/assets/avatar.jpg"
                            alt="it's me"
                            className='cursor-pointer'
                        />
                        <div className='flex flex-col flex-1 gap-1'>
                            <div className='flex flex-col w-max px-3 py-2 bg-[#e7e8e8] rounded-2xl relative'>
                                <Title className='!text-[14px] !font-semibold'>Killian Le</Title>
                                <Title className='!text-[14px] !font-normal'>Wow, You are so talented and creative.</Title>
                                <Badge
                                    className={`absolute right-[-25px] bottom-[-10px]`}
                                    color="blue"
                                >
                                    <div className='flex items-center justify-center gap-1'>
                                        <AiFillLike />
                                        <span>100</span>
                                    </div>
                                </Badge>
                            </div>
                            <div className='flex items-center justify-start gap-4 w-full'>
                                <Title className={classNames('!text-[12px] cursor-pointer !font-medium', { "!text-[#6b7280]": true })}>Like</Title>
                                <Title className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Edit</Title>
                                <Title className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Delete</Title>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-start gap-2'>
                        <IoIosArrowDown />
                        <Title className='!text-[14px] !text-[#5b6270] !font-normal cursor-pointer hover:!text-blue-400'>More comment</Title>
                    </div>
                </div>
                <Divider className='w-full' my="0" size={"xs"} />
                <div className='post-comment-input w-full flex items-center justify-center gap-3'>
                    <Avatar
                        size={"sm"}
                        src="/src/assets/avatar.jpg"
                        alt="it's me"
                        className='cursor-pointer'
                    />
                    <Input
                        placeholder="Add comment..."
                        variant="unstyled"
                        className='!mt-0 flex-1'
                        value={commentValue}
                        onChange={(event) => setCommentValue(event.currentTarget.value)}
                        rightSectionPointerEvents="all"
                        mt="md"
                        rightSection={
                            <CloseButton
                                aria-label="Add comment"
                                onClick={() => setCommentValue('')}
                                style={{ display: commentValue ? undefined : 'none' }}
                            />
                        }
                    />
                    <ActionIcon variant="transparent" size="xl" aria-label="Image">
                        <FaImage size={24} />
                    </ActionIcon>
                    <AnimatedButton
                        className='submit-primary-button py-1 px-3 disabled:cursor-not-allowed w-auto h-auto items-center text-[#fff] text-[14px] rounded-2xl'
                        whileHover={{
                            scale: 1.025,
                            transition: {
                                type: "spring",
                                stiffness: 2000,
                            }
                        }}
                    >
                        Send
                    </AnimatedButton>
                </div>
            </Fragment>}
        </div>
    )
}

export default CommonPost