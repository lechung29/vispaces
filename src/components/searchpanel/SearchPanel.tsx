/** @format */

import { IAction } from "@/types/Function";
import React from "react";
import { motion } from "framer-motion";
import "./index.scss";
import { IoCloseOutline } from "react-icons/io5";
import { SearchItem } from "../searchitem";
import { IoIosArrowRoundDown } from "react-icons/io";
import { bigIconStyle, defaultIconStyle, IconButton, SubmitButton, Text, TextField, Tooltip } from "../common";
import { ScrollArea } from "@radix-ui/themes";

export interface ISearchPanelProps {
    isOpen: boolean;
    onClose: IAction;
    headerTitle: string;
    hasCloseButton?: boolean;
    content?: React.ReactNode;
    parentRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const SearchPanelView: React.FunctionComponent<ISearchPanelProps> = (props) => {
    const { isOpen, onClose, parentRef, headerTitle } = props;
    const panelRef = React.useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (panelRef.current && !!parentRef?.current && !panelRef.current.contains(event.target as Node) && !parentRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeButton = React.useMemo(() => {
        return <IconButton size="3" aria-label="Close panel" radius="full" tabIndex={0} onClick={onClose} iconElement={<IoCloseOutline style={bigIconStyle} />} />;
    }, []);

    const loadMoreIcon = React.useMemo(() => {
        return (
            <motion.div
                whileInView={{
                    scale: [0.5, 1],
                    transition: {
                        duration: 1,
                        type: "spring",
                        stiffness: 200,
                        ease: "easeInOut",
                        repeat: Infinity,
                    },
                }}
            >
                <IoIosArrowRoundDown style={defaultIconStyle} />
            </motion.div>
        );
    }, []);

    return (
        <aside hidden={!isOpen} ref={panelRef} className="g-search-panel-section">
            <ScrollArea
                className="g-search-panel-scrollbar"
                size="1"
                type="scroll"
                scrollbars="vertical"
                scrollHideDelay={1000}
                style={{
                    height: "100vh",
                }}
            >
                <section className="g-search-panel-container">
                    <div className="g-search-panel-header">
                        <Text className="g-search-panel-header-title" fontSize={22} fw={500} tabIndex={0} displayText={headerTitle} />
                        <div className="g-search-panel-header-action">
                            <Tooltip tooltipContent="Close panel" element={closeButton} side="top" />
                        </div>
                    </div>
                    <div className="g-search-panel-input">
                        <TextField 
                            placeholder="Search" 
                            value="" 
                            haveSearchIcon
                            onChange={() => console.log("1134")} 
                        />
                    </div>
                    {/* <Divider
                        className="w-full"
                        my="md"
                        color="#f3f4f6"
                        size={"xs"}
                    /> */}
                    <div className="g-search-panel-action-button">
                        <Text
                            displayText="Recent"
                            as="p"
                            fontSize={17}
                            fw={500}
                            tabIndex={0} 
                        />
                        <Text
                            className="g-search-panel-action-button-text"
                            displayText="Clear all"
                            as="p"
                            fontSize={15}
                            fw={400}
                            tabIndex={0} 
                        />
                    </div>
                    <div className="g-search-panel-content">
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
                    </div>
                    <div className="g-search-panel-footer">
                        <SubmitButton
                            className="g-search-panel-footer-button"
                            displayText="Load more..."
                            buttonHeight="auto"
                            buttonWidth="auto"
                            disabled={true}
                            leftSection={loadMoreIcon}
                        />
                    </div>
                </section>
            </ScrollArea>
        </aside>
    );
};

export { SearchPanelView as SearchPanel };
