/** @format */

import React from "react";
import { motion } from "framer-motion";
import { TextInput } from "@/components";
import { Textarea } from "@mantine/core";

const GeneralSetting: React.FunctionComponent = () => {
    return (
        <motion.section className="space-y-6">
            <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                <motion.label className="md:w-32 text-right font-medium">Display name</motion.label>
                <motion.div className="flex-1 max-md:mt-4">
                    <TextInput
                        className="placeholder:text-[14px]"
                        size="md"
                        variant="filled"
                        radius="md"
                        placeholder="Enter new name..."
                        name="displayName"
                        // value={"Killian Le"}
                    />
                </motion.div>
            </motion.div>
            <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                <motion.label className="md:w-32 text-right font-medium">Email</motion.label>
                <motion.div className="flex-1 max-md:mt-4">
                    <TextInput
                        className="placeholder:text-[14px]"
                        size="md"
                        variant="filled"
                        radius="md"
                        placeholder="Enter new email..."
                        name="email"
                        // value={"Killian Le"}
                    />
                </motion.div>
            </motion.div>
            <motion.div className="md:flex items-start gap-10 text-[#4b5563] text-[14px]">
                <motion.label className="md:w-32 text-right font-medium">Biography</motion.label>
                <motion.div className="flex-1 max-md:mt-4">
                    <Textarea
                        className="placeholder:text-[14px]"
                        size="md"
                        variant="filled"
                        radius="md"
                        placeholder="Enter new biography..."
                        name="biography"
                        rows={4}
                        // value={"Killian Le"}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export { GeneralSetting };
