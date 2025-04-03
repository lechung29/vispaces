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
import { Badge } from '@radix-ui/themes';
import { TextField } from '../common/textfield';
import "./index.scss"
import { Avatar } from '../common/avatar';
import { Text } from '../common/text';
import { Tooltip } from '../common/tooltip';
import { defaultIconStyle, IconButton } from '../common/iconbutton';
import { AnimationSubmitButton } from '../common/animations';

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
        <section className="g-common-post-section">
            <div className="g-common-post-section-header">
                <div className="g-common-post-author-info">
                    <Avatar
                        avatarName="killian.le"
                        src="/src/assets/avatar.jpg"
                        alt="it's me"
                        className="g-common-post-author-avatar"
                    />
                    <div className="g-common-post-author-username">
                        <Text 
                            className="g-common-post-author-username-name"
                            displayText="Killian Le"
                        />
                        <Text 
                            className="g-common-post-author-username-time"
                            displayText="2 hours ago" 
                        />
                    </div>
                </div>
                <div hidden className="g-common-post-action-menu">
                    <PostActionMenu />
                </div>
            </div>
            <div className="g-common-post-section-content">
                <Text 
                    className="g-common-post-section-content-text"
                    displayText="Tôi buồn ngủ quá" 
                />
                <PhotoProvider>
                    <PhotoView src="/src/assets/b38bfc6b-06f6-4336-9487-bdd473466643.jpg">
                        <img
                            className="g-common-post-section-content-media"
                            src="/src/assets/b38bfc6b-06f6-4336-9487-bdd473466643.jpg"
                            alt="post-image"
                        />
                        {/* <video src='/src/assets/ViSpace _ Home - Google Chrome 2024-12-03 13-17-13.mp4' controls  autoPlay> */}

                        {/* </video> */}
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="g-common-post-section-action">
                <div className="g-common-post-section-action-list">
                    <div className="g-common-post-section-action-item">
                        <Tooltip
                            tooltipContent="Like"
                            element={<IconButton 
                                aria-label="Like"
                                variant="ghost"
                                radius="full"
                                onClick={handleLikeClick}
                                iconElement={<IoHeartSharp size={20} />}
                            />}
                        />
                        <Text 
                            className="g-common-post-section-action-item-count"
                            displayText="1380"
                        />
                    </div>
                    <div className="g-common-post-section-action-item">
                        <Tooltip
                            tooltipContent="Comment"
                            element={<IconButton 
                                aria-label="Comment"
                                variant="ghost"
                                radius="full"
                                onClick={handleCommentClick}
                                iconElement={<FaCommentDots size={20} />}
                            />}
                        />
                        <Text 
                            className="g-common-post-section-action-item-count"
                            displayText="260"
                        />
                    </div>
                </div>
                <div className="g-common-post-section-action-list">
                    <Tooltip
                        tooltipContent="Share"
                        element={<IconButton 
                            aria-label="Share"
                            variant="ghost"
                            radius="full"
                            // onClick={handleLikeClick}
                            iconElement={<IoShareOutline size={20} />}
                        />}
                    />

                </div>
            </div>
            {isOpenComment && <Fragment>
                {/* <Divider className='w-full' my="0" size={"xs"} /> */}
                <div className="g-common-post-section-comment">
                    <div className="g-common-post-section-comment-item">
                        <Avatar
                            avatarName="killian.le"
                            size="2"
                            src="/src/assets/avatar.jpg"
                            alt="it's me"
                        />
                        <div className="g-common-post-section-comment-item-content">
                            <div className="g-common-post-section-comment-item-text">
                                <Text 
                                    displayText="Killian Le"
                                    fontSize={14}
                                    fw={600}
                                />
                                <Text
                                    displayText="Wow, You are so talented and creative."
                                    fontSize={14}
                                    fw={500}
                                />
                                <Badge
                                    className="g-common-post-section-comment-item-notice"
                                    variant="solid"
                                    color="blue"
                                    radius="full"
                                >
                                    <div className="g-common-post-section-comment-item-notice-text">
                                        <AiFillLike />
                                        <span>100</span>
                                    </div>
                                </Badge>
                            </div>
                            <div className="g-common-post-section-comment-item-action">
                                <Text 
                                    className={classNames("g-common-post-section-comment-item-action-default", { "item-action-active": true })}
                                    displayText="Like"
                                    fontSize={12}
                                    fw={500}
                                />
                                <Text 
                                    className="g-common-post-section-comment-item-action-default"
                                    displayText="Edit"
                                    fontSize={12}
                                    fw={500}
                                />
                                <Text 
                                    className="g-common-post-section-comment-item-action-default"
                                    displayText="Delete"
                                    fontSize={12}
                                    fw={500}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="g-common-post-section-comment-loadMore">
                        <IoIosArrowDown />
                        <Text 
                            className="g-common-post-section-comment-loadMore-text" 
                            displayText="More comments"
                            fontSize={14}
                            fw={400}
                        />
                    </div>
                </div>
                {/* <Divider className='w-full' my="0" size={"xs"} /> */}
                <div className="g-common-post-section-newComment">
                    <Avatar
                        avatarName="Killian le"
                        size="3"
                        src="/src/assets/avatar.jpg"
                        alt="Killian"
                    />
                    <TextField
                        className="g-common-post-section-newComment-input"
                        placeholder="Add comment..."
                        name="Comment"
                        value={commentValue}
                        onChange={(value, _e) => setCommentValue(value)}
                        rightSection={<IconButton
                            aria-label="Add image"
                            onClick={() => setCommentValue('')}
                            iconElement={<FaImage style={defaultIconStyle} />}
                        />}
                    />
                    <AnimationSubmitButton
                        className="g-common-post-section-newComment-sendButton"
                        displayText="Send"
                        // isLoading={isLoading}
                        // onClick={handleSubmit}
                        buttonHeight={40}
                    />
                </div>
            </Fragment>}
        </section>
    )
}

export {
    CommonPostView as CommonPost
}