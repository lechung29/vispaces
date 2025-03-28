/** @format */

import React from "react";
import { motion } from "framer-motion";
import { TextInput } from "@/components";
import { Select, Textarea } from "@mantine/core";

const GeneralSetting: React.FunctionComponent = () => {
    return (
        <React.Fragment>
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
                            aria-required
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
                <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                    <motion.label className="md:w-32 text-right font-medium">Gender</motion.label>
                    <motion.div className="flex-1 max-md:mt-4">
                        <Select 
                            data={["None", "Male", "Female"]}
                            variant="filled"
                            size="md"
                            radius="md"
                            placeholder="Select your gender..."
                            name="gender"
                            value={"None"}
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                    <motion.label className="md:w-32 text-right font-medium">Relationship</motion.label>
                    <motion.div className="flex-1 max-md:mt-4">
                        <Select 
                            data={["None", "Single", "In a relationship", "Married", "Engaged"]}
                            variant="filled"
                            size="md"
                            radius="md"
                            placeholder="Select your relationship..."
                            name="relationship"
                            value={"None"}
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </React.Fragment>
    );
};

export { GeneralSetting };
