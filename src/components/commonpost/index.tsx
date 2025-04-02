import React, { Fragment, useState } from 'react'
import { PostActionMenu } from '../postactionmenu'
import { FaImage } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { IoHeartSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { classNames } from '@/utils';
import { IoIosArrowDown } from "react-icons/io";
import { AnimatedDefaultButton } from '../animatedComponent';
import { motion } from "framer-motion"
import { Avatar, Badge, Button, IconButton, Text, Tooltip } from '@radix-ui/themes';
import { TextField } from '../common/textfield/TextField';

interface ICommonPostProps {

}

const CommonPostView: React.FunctionComponent<ICommonPostProps> = (_props) => {
    const [isLike, setIsLike] = useState(false)
    const [isOpenComment, setIsOpenComment] = useState(false)
    const [commentValue, setCommentValue] = useState("")
    const handleLikeClick = () => {
        setIsLike(!isLike)
    }

    const handleCommentClick = () => {
        setIsOpenComment(!isOpenComment)
    }
    return (
        <motion.section className='bg-white h-auto w-full p-4 rounded-lg drop-shadow-sm flex items-center justify-center flex-col gap-4'>
            <motion.header className='post-basic-info-row w-full flex items-center justify-between'>
                <motion.figure className='post-author-info flex items-center justify-center gap-3'>
                    <Avatar
                        src="/src/assets/avatar.jpg"
                        alt="it's me"
                        className='cursor-pointer'
                        fallback
                    />
                    <motion.figcaption className='flex flex-col'>
                        <Text className='!text-[14px] !font-semibold'>Killian Le</Text>
                        <Text className='!text-[12px] !font-medium !text-[#6b7280]'>2 hours ago</Text>
                    </motion.figcaption>
                </motion.figure>
                <motion.section hidden className='post-action-menu flex items-center justify-center'>
                    <PostActionMenu />
                </motion.section>
            </motion.header>
            <motion.article className='post-content-row w-full flex flex-col gap-3'>
                <Text className='!text-[13px] !font-normal' >Tôi buồn ngủ quá</Text>
                <PhotoProvider>
                    <PhotoView src="/src/assets/b38bfc6b-06f6-4336-9487-bdd473466643.jpg">
                        {/* <Image
                            radius="md"
                            h="auto"
                            w="100%"
                            fit="cover"
                            className='cursor-pointer'
                            // src="/src/assets/background.jpg"
                            src="/src/assets/b38bfc6b-06f6-4336-9487-bdd473466643.jpg"
                        /> */}
                        {/* <video src='/src/assets/ViSpace _ Home - Google Chrome 2024-12-03 13-17-13.mp4' controls  autoPlay> */}

                        {/* </video> */}
                    </PhotoView>
                </PhotoProvider>
            </motion.article>
            <motion.section className='post-action-row w-full flex items-center justify-between'>
                <motion.section className='flex items-center justify-center gap-2'>
                    <motion.section className='flex items-center justify-center gap-1'>
                        <Tooltip
                            // withArrow
                            // transitionProps={{ duration: 200 }}
                            content="Like"
                        >
                            <Button
                                // variant="light"
                                // size="md"
                                // radius="xl"
                                // color={isLike ? "red" : "#6b7280"}
                                aria-label="Like"
                                onClick={handleLikeClick}
                            >
                                <IoHeartSharp size={20} />
                            </Button>
                        </Tooltip>
                        <Text className='post-total-like !text-[#6b7280] !font-medium !text-[13px]'>1,380</Text>
                    </motion.section>
                    <motion.section className='flex items-center justify-center gap-1'>
                        <Tooltip
                            // withArrow
                            // transitionProps={{ duration: 200 }}
                            content="Comment"
                        >
                            <IconButton
                                // variant="light"
                                // size="md"
                                // radius="xl"
                                // color={isOpenComment ? "blue" : "#6b7280"}
                                aria-label="Like"
                                onClick={handleCommentClick}
                            >
                                <FaCommentDots size={20} />
                            </IconButton>
                        </Tooltip>
                        <Text className='post-total-like !text-[#6b7280] !font-medium !text-[13px]'>260</Text>
                    </motion.section>
                </motion.section>
                <motion.section className='flex items-center justify-center'>
                    <Tooltip
                        // withArrow
                        // transitionProps={{ duration: 200 }}
                        content="Share"
                    >
                        <IconButton
                            // variant="subtle"
                            // size="md"
                            // radius="xl"
                            // color={"#6b7280"}
                            aria-label="Like"
                        >
                            <IoShareOutline size={20} />
                        </IconButton>
                    </Tooltip>
                </motion.section>
            </motion.section>
            {isOpenComment && <Fragment>
                {/* <Divider className='w-full' my="0" size={"xs"} /> */}
                <motion.section className='post-comment-section w-full flex flex-col gap-2'>
                    <motion.section className='comment-item w-full flex items-start justify-center gap-3'>
                        <Avatar
                            // size={"sm"}
                            src="/src/assets/avatar.jpg"
                            alt="it's me"
                            className='cursor-pointer'
                            fallback
                        />
                        <motion.section className='flex flex-col flex-1 gap-1'>
                            <motion.section className='flex flex-col w-max px-3 py-2 bg-[#e7e8e8] rounded-2xl relative'>
                                <Text className='!text-[14px] !font-semibold'>Killian Le</Text>
                                <Text className='!text-[14px] !font-normal'>Wow, You are so talented and creative.</Text>
                                <Badge
                                    className={`absolute right-[-25px] bottom-[-10px]`}
                                    color="blue"
                                >
                                    <motion.div className='flex items-center justify-center gap-1'>
                                        <AiFillLike />
                                        <motion.span>100</motion.span>
                                    </motion.div>
                                </Badge>
                            </motion.section>
                            <motion.section className='flex items-center justify-start gap-4 w-full'>
                                <Text className={classNames('!text-[12px] cursor-pointer !font-medium', { "!text-[#6b7280]": true })}>Like</Text>
                                <Text className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Edit</Text>
                                <Text className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Delete</Text>
                            </motion.section>
                        </motion.section>
                    </motion.section>
                    <motion.section className='comment-item w-full flex items-start justify-center gap-3'>
                        <Avatar
                            size={"3"}
                            src="/src/assets/avatar.jpg"
                            alt="it's me"
                            className='cursor-pointer'
                            fallback
                        />
                        <motion.section className='flex flex-col flex-1 gap-1'>
                            <motion.section className='flex flex-col w-max px-3 py-2 bg-[#e7e8e8] rounded-2xl relative'>
                                <Text className='!text-[14px] !font-semibold'>Killian Le</Text>
                                <Text className='!text-[14px] !font-normal'>Wow, You are so talented and creative.</Text>
                                <Badge
                                    className={`absolute right-[-25px] bottom-[-10px]`}
                                    color="blue"
                                >
                                    <motion.div className='flex items-center justify-center gap-1'>
                                        <AiFillLike />
                                        <motion.span>100</motion.span>
                                    </motion.div>
                                </Badge>
                            </motion.section>
                            <motion.section className='flex items-center justify-start gap-4 w-full'>
                                <Text className={classNames('!text-[12px] cursor-pointer !font-medium', { "!text-[#6b7280]": true })}>Like</Text>
                                <Text className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Edit</Text>
                                <Text className='!text-[12px] cursor-pointer !font-medium !text-[#6b7280]'>Delete</Text>
                            </motion.section>
                        </motion.section>
                    </motion.section>
                    <motion.section className='flex w-full items-center justify-start gap-2'>
                        <IoIosArrowDown />
                        <Text className='!text-[14px] !text-[#5b6270] !font-normal cursor-pointer hover:!text-blue-400'>More comment</Text>
                    </motion.section>
                </motion.section>
                {/* <Divider className='w-full' my="0" size={"xs"} /> */}
                <motion.section className='post-comment-input w-full flex items-center justify-center gap-3'>
                    <Avatar
                        size={"3"}
                        src="/src/assets/avatar.jpg"
                        alt="it's me"
                        className='cursor-pointer'
                        fallback
                    />
                    <TextField
                        placeholder="Add comment..."
                        variant="soft"
                        className='!mt-0 flex-1'
                        value={commentValue}
                        onChange={(value, _e) => setCommentValue(value)}
                        mt="md"
                        rightSection={
                            <IconButton
                                aria-label="Add comment"
                                onClick={() => setCommentValue('')}
                                style={{ display: commentValue ? undefined : 'none' }}
                            />
                        }
                    />
                    <IconButton variant="soft" size="3" aria-label="Image">
                        <FaImage size={24} />
                    </IconButton>
                    <AnimatedDefaultButton
                        className=' py-1 px-3 disabled:cursor-not-allowed w-auto h-auto items-center text-[#fff] text-[14px] rounded-2xl'
                        whileHover={{
                            scale: 1.025,
                            transition: {
                                type: "spring",
                                stiffness: 2000,
                            }
                        }}
                    >
                        Send
                    </AnimatedDefaultButton>
                </motion.section>
            </Fragment>}
        </motion.section>
    )
}

export {
    CommonPostView as CommonPost
}