import { Outlet } from "react-router-dom";
import "./index.scss"
import { Navigation } from "../navigation";
import { ScrollArea } from "@mantine/core";
import { motion } from "framer-motion"

export const Layout: React.FunctionComponent = () => {

    return <motion.div className="common-layout-section w-screen min-h-screen h-full flex items-center">
        <Navigation />
        <ScrollArea h={"100vh"} w={"100vw"} type="never">
            <motion.div className="common-layout-main-section min-h-screen flex-1 px-5 py-10 bg-customBg1">
                <Outlet />
            </motion.div>
        </ScrollArea>
    </motion.div>
};