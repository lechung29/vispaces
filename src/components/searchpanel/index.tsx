import { IAction } from '@/types/Function'
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import "./index.scss"
import { ScrollArea } from '@mantine/core'

export interface ISearchPanelProps {
    isOpen: boolean
    onClose: IAction;
    headerTitle: string
    hasCloseButton?: boolean
    content?: React.ReactNode
}

const SearchPanel: React.FunctionComponent<ISearchPanelProps> = (props) => {
    const { isOpen, onClose } = props
    const panelRef = useRef<HTMLDivElement | null>(null)

    // const handleClickOutside = (event: MouseEvent) => {
    //     if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
    //         onClose()

    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside)
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside)
    //     }
    // }, [])
    return (
        <motion.aside 
            hidden={!isOpen} 
            ref={panelRef} 
            className='search-panel-section w-96 h-[100vh] bg-white absolute top-0 bottom-0 left-[100%] z-10'
        >
            <ScrollArea w={"100%"} h={"100vh"} type='hover'>
                <motion.section className='w-full h-full px-4 py-3'>
                    <motion.header className='w-full h-auto flex items-center justify-between'>
                        <button onClick={onClose}>Close</button>
                    </motion.header>
                </motion.section>
            </ScrollArea>
        </motion.aside>
    )
}

export default SearchPanel