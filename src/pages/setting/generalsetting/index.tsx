/** @format */

import React from "react";
import { motion } from "framer-motion";
import { TextField } from "@/components";
import { Select, TextArea } from "@radix-ui/themes";

const GeneralSetting: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <motion.section className="space-y-6">
                <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                    <motion.label className="md:w-32 text-right font-medium">Display name</motion.label>
                    <motion.div className="flex-1 max-md:mt-4">
                        <TextField
                            className="placeholder:text-[14px]"
                            size="3"
                            variant="soft"
                            radius="full"
                            placeholder="Enter new name..."
                            name="displayName"
                            // value={"Killian Le"}
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                    <motion.label className="md:w-32 text-right font-medium">Email</motion.label>
                    <motion.div className="flex-1 max-md:mt-4">
                        <TextField
                            className="placeholder:text-[14px]"
                            size="3"
                            variant="soft"
                            radius="full"
                            placeholder="Enter new email..."
                            name="email"
                            // value={"Killian Le"}
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="md:flex items-start gap-10 text-[#4b5563] text-[14px]">
                    <motion.label className="md:w-32 text-right font-medium">Biography</motion.label>
                    <motion.div className="flex-1 max-md:mt-4">
                        <TextArea
                            className="placeholder:text-[14px]"
                            aria-required
                            size="3"
                            variant="soft"
                            radius="full"
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
                        <Select.Root 
                            // data={["None", "Male", "Female"]}
                            // variant=""
                            size="3"
                            // radius=""
                            // placeholder="Select your gender..."
                            name="gender"
                            value={"None"}
                        ></Select.Root>
                    </motion.div>
                </motion.div>
                <motion.div className="md:flex items-center gap-10 text-[#4b5563] text-[14px]">
                    <motion.label className="md:w-32 text-right font-medium">Relationship</motion.label>
                    <motion.div className="flex-1 max-md:mt-4">
                        <Select.Root 
                            // data={["None", "Single", "In a relationship", "Married", "Engaged"]}
                            // variant="filled"
                            size="3"
                            // radius="md"
                            // placeholder="Select your relationship..."
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
