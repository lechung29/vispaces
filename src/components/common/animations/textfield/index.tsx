/** @format */

import React from "react";
import { TextField, ITextInputProps } from "../../textfield";
import { motion } from "framer-motion";

const AnimationTextField: React.FunctionComponent<ITextInputProps> = (props) => {
    return (
        <motion.div
            className="flex justify-center items-center"
            whileHover={{
                scale: 1.025,
                transition: {
                    stiffness: 1000,
                    type: "spring",
                    ease: "easeInOut",
                },
            }}
        >
            <TextField {...props} />
        </motion.div>
    );
};

export { AnimationTextField };
