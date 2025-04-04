import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss"
import type { Swiper as SwiperInstance } from "swiper";
import { IAction } from "@/types/Function";
import { useImmerState } from "@/hooks/useImmerState";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { classNames } from "@/utils";
import { defaultIconStyle, IconButton, Text } from "../common";
import { StoryAvatar } from "../storyavatar";

export interface IStoryListProps {
    items?: any[];

}

interface IStoryListState {
    isStart: boolean;
    isEnd: boolean;
}

const initialState: IStoryListState = {
    isStart: true,
    isEnd: false,
}

const StoryList: React.FunctionComponent<IStoryListProps> = (_props) => {
    const [state, setState] = useImmerState<IStoryListState>(initialState)
    const { isStart, isEnd } = state
    const swiperRef = useRef<SwiperInstance | null>(null)

    const onNextItemClick: IAction = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
            setState({ isStart: false })
            if (swiperRef.current.isEnd) {
                setState({ isEnd: true })
            }
        }
    }

    const onPreviousItemClick: IAction = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev()
            setState({ isEnd: false })
            if (swiperRef.current.isBeginning) {
                setState({ isStart: true })
            }
        }
    }
    return (
        <section className="g-story-list-section">
            <Text 
                className="g-story-list-section-title"
                as="div"
                displayText="Stories"
            />
            <div className="g-story-list-section-List">
                <IconButton
                    radius="full"
                    className={classNames("g-story-list-section-List-button", { "invisible": isStart }, { "visible": !isStart })}
                    onClick={onPreviousItemClick}
                    iconElement={<GrFormPrevious style={defaultIconStyle} />}
                />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={9}
                    className="g-story-list-section-List-swiper"
                    style={{
                        padding: 10,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <SwiperSlide key={index}>
                            <StoryAvatar className="g-story-list-section-List-swiper-slide" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IconButton
                    radius="full"
                    className={classNames("g-story-list-section-List-button", { "invisible": isEnd }, { "visible": !isEnd })}
                    onClick={onNextItemClick}
                    iconElement={<GrFormNext style={defaultIconStyle} />}
                />
            </div>
        </section>
    )
}

export { StoryList };