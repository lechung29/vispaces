import { IAction } from '@/types/Function'
import React, { useEffect, useMemo, useRef } from 'react'
import { motion } from "framer-motion"
import "./index.scss"
import { ActionIcon, Divider, ScrollArea, Title } from '@mantine/core'
import { IoCloseOutline } from "react-icons/io5";
import { TooltipItem } from '@/utils'
import { SearchItem } from '../searchitem'
import { AnimatedButton } from '../animatedComponent'
import { IoIosArrowRoundDown } from "react-icons/io";
import { TextInput } from '../common'

export interface ISearchPanelProps {
    isOpen: boolean
    onClose: IAction;
    headerTitle: string
    hasCloseButton?: boolean
    content?: React.ReactNode
    parentRef?: React.MutableRefObject<HTMLDivElement | null>
}

const SearchPanelView: React.FunctionComponent<ISearchPanelProps> = (props) => {
    const { isOpen, onClose, parentRef, headerTitle } = props
    const panelRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (panelRef.current && !!parentRef?.current && !panelRef.current.contains(event.target as Node) && !parentRef.current.contains(event.target as Node)) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const closeButton = useMemo(() => {
        return <ActionIcon
            color='gray'
            tabIndex={0}
            size="xl"
            variant="transparent"
            aria-label="Close"
            onClick={onClose}
        >
            <IoCloseOutline style={{ width: '70%', height: '70%' }} />
        </ActionIcon>
    }, [])

    return (
        <motion.aside
            hidden={!isOpen}
            ref={panelRef}
            className='search-panel-section w-96 h-[100vh] bg-white absolute top-0 bottom-0 left-[100%] z-10'
        >
            <ScrollArea w={"100%"} h={"100vh"} scrollbarSize={8} type='hover'>
                <motion.section className='w-full h-full py-5'>
                    <motion.header className='w-full h-full flex items-center justify-between px-4'>
                        <Title tabIndex={0} className='!font-medium !text-[22px] text-[#3f4854]'>{headerTitle}</Title>
                        {TooltipItem(closeButton, "Close")}
                    </motion.header>
                    <motion.article className='w-full h-auto my-3 px-4'>
                        <TextInput
                            placeholder='Search'
                            variant={"filled"}
                            leftSection
                            value=''
                            haveSearchIcon
                            size='sm'
                            onChange={() => console.log("1134")}
                        />
                    </motion.article>
                    <Divider
                        className='w-full'
                        my="md"
                        color="#f3f4f6"
                        size={"xs"}
                    />
                    <motion.article className='w-full h-auto px-4 my-2 flex items-center justify-between'>
                        <Title tabIndex={0} className='!text-[17px] !text-[#4b5563] font-medium'>Recent</Title>
                        <Title tabIndex={0} className='!text-[15px] !text-blue-500 font-normal select-none cursor-pointer'>Clear all</Title>
                    </motion.article>
                    <motion.article className='w-full h-auto px-4 my-5 flex flex-col gap-1'>
                        <SearchItem isFollowed={false} />
                        <SearchItem isFollowed={true} />
                        <SearchItem isFollowed={false} />
                        <SearchItem isFollowed={true} />
                        <SearchItem isFollowed={false} />
                        <SearchItem isFollowed={true} />
                        <SearchItem isFollowed={false} />
                        <SearchItem isFollowed={true} />
                        <SearchItem isFollowed={false} />
                        <SearchItem isFollowed={true} />
                    </motion.article>
                    <motion.section className='w-full h-auto px-4 my-3 flex items-center justify-center'>
                        <AnimatedButton
                            className='submit-primary-button disabled:cursor-not-allowed disabled:text-white w-auto h-auto !px-3 !py-1 text-[#fff] !text-[13px] !rounded-3xl'
                            disabled={true}
                            leftSection={<motion.div
                                whileInView={{
                                    scale: [0.5, 1],
                                    transition: {
                                        duration: 1,
                                        type: "spring",
                                        stiffness: 200,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                    }
                                }}
                            >
                                <IoIosArrowRoundDown size={20} />
                            </motion.div>}
                        >
                            Load more
                        </AnimatedButton>
                    </motion.section>
                </motion.section>
            </ScrollArea>
        </motion.aside>
    )
}

export {
    SearchPanelView as SearchPanel
}