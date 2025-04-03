/** @format */

import { IoChevronForward } from "react-icons/io5";
import React from "react";
import { motion } from "framer-motion";
import { classNames } from "@/utils";
import { Avatar, Button } from "@radix-ui/themes";
import { BaseButton } from "@radix-ui/themes/components/_internal/base-button";
import { Text } from "../common";

interface IUserButtonProps extends React.ComponentPropsWithoutRef<typeof BaseButton> {
    image: string;
    name: string;
    email: string;
    icon?: React.ReactNode;
    menuPosition?: "top" | "bottom";
}

const UserButton = React.forwardRef<HTMLButtonElement, IUserButtonProps>(({ image, name, email, icon, menuPosition, ...others }: IUserButtonProps, ref) => (
    <Button
        ref={ref}
        style={{
            padding: "8px 12px",
            color: "var(--mantine-color-text)",
            borderRadius: "var(--mantine-radius-sm)",
        }}
        {...others}
    >
        <div className="!gap-2 !flex-nowrap group">
            <Avatar size={"4"} src={image} radius="full" className="cursor-pointer" fallback />
            <motion.section style={{ flex: 1 }}>
                <Text size="2" displayText={name} />
                <Text size="2" displayText={email} />
            </motion.section>

            {icon || (
                <IoChevronForward
                    className={classNames(`transition-transform duration-300`, {
                        "group-hover:-rotate-90": menuPosition === "top",
                        "group-hover:rotate-90": menuPosition === "bottom",
                    })}
                    size="1rem"
                />
            )}
        </div>
    </Button>
));

export { UserButton };
