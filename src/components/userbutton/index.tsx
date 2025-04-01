import { IoChevronForward } from "react-icons/io5";
import React from 'react'
import { motion } from "framer-motion"
import { classNames } from "@/utils";
import { Avatar, Button, Text } from "@radix-ui/themes";

interface IUserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    email: string;
    // imageSize?: MantineSize | (string & {}) | number;
    icon?: React.ReactNode;
    // menuPosition?: FloatingPosition
}

const UserButton = React.forwardRef<HTMLButtonElement, IUserButtonProps>(
    ({ image, name, email, icon, ...others }: IUserButtonProps, ref) => (
        <Button
            ref={ref}
            style={{
                padding: '8px 12px',
                color: 'var(--mantine-color-text)',
                borderRadius: 'var(--mantine-radius-sm)',
            }}
            // {...others}
        >
            {/* <Group className="!gap-2 !flex-nowrap group"> */}
                <Avatar
                    // size={imageSize || "sm"}
                    src={image}
                    // radius="xl"
                    className="cursor-pointer"
                    fallback
                />
                <motion.section style={{ flex: 1 }}>
                    <Text size="2">
                        {name}
                    </Text>
                    <Text size="2">
                        {email}
                    </Text>
                </motion.section>

                {icon || <IoChevronForward className={classNames(`transition-transform duration-300`, {
                    // 'group-hover:-rotate-90': menuPosition === "top",
                    // 'group-hover:rotate-90': menuPosition === "bottom"
                })}
                    size="1rem"
                />}
            {/* </Group> */}
        </Button>
    )
);

export {
    UserButton
}
