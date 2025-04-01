/** @format */

import React from "react";
import { ISubmitButtonProps, SubmitButton } from "../../submitbutton";
import { motion } from "framer-motion"

const AnimationSubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props) => {
    const { buttonWidth, buttonHeight, ...rest } = props
    return <motion.div
        className="flex justify-center items-center"
        style={{
            width: buttonWidth || "auto",
            height: buttonHeight || 40
        }}
        whileHover={{
            scale: 1.025,
            transition: {
                stiffness: 1000,
                type: "spring",
                ease: "easeInOut",
            }
        }}
    >
        <SubmitButton 
            {...rest}
            buttonWidth="100%"
            buttonHeight="100%"
        />
    </motion.div>;
};

export { AnimationSubmitButton };
