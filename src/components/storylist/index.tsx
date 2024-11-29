import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss"
import { AnimatedAvatar, AnimatedIconButton } from "../animatedComponent";
import type { Swiper as SwiperInstance } from "swiper";
import { IAction } from "@/types/Function";
import { useImmerState } from "@/hooks/useImmerState";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { classNames } from "@/utils";
import { Title } from "@mantine/core";
import { motion } from "framer-motion"

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
        <motion.section>
            <Title className="!mx-14 !text-[24px] !font-bold">Stories</Title>
            <motion.article className="flex items-center justify-start">
                <AnimatedIconButton
                    variant="subtle"
                    size="lg"
                    radius="xl"
                    className={classNames("drop-shadow-md !bg-[#fff]", { "invisible": isStart }, { "visible": !isStart })}
                    onClick={onPreviousItemClick}
                    whileHover={{
                        scale: 1.1,
                        x: -5,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            duration: 1
                        }
                    }}
                >
                    <GrFormPrevious size={24} color="#000" />
                </AnimatedIconButton>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={9}
                    className="w-full max-w-[900px] h-[100px] !mx-3"
                    style={{
                        padding: 10,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AnimatedAvatar
                            whileHover={{
                                scale: 1.25
                            }}
                            className='cursor-pointer border-4 border-white drop-shadow-md'
                            src="image.png"
                            size={"4.5rem"}
                            alt="it's me"
                        // onClick={}
                        />
                    </SwiperSlide>


                </Swiper>
                <AnimatedIconButton
                    variant="subtle"
                    size="lg"
                    radius="xl"
                    className={classNames("drop-shadow-md !bg-[#fff]", { "invisible": isEnd }, { "visible": !isEnd })}
                    onClick={onNextItemClick}
                    whileHover={{
                        scale: 1.1,
                        x: 5,
                        transition: {
                            type: "spring",
                            stiffness: 500,
                            duration: 1
                        }
                    }}
                >
                    <GrFormNext size={24} color="#000" />
                </AnimatedIconButton>
            </motion.article>
        </motion.section>
    )
}

export default StoryList