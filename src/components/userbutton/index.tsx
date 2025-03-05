import { IoChevronForward } from "react-icons/io5";
import { Group, Avatar, Text, UnstyledButton, MantineSize, FloatingPosition } from '@mantine/core';
import React from 'react'
import { motion } from "framer-motion"
import { classNames } from "@/utils";

interface IUserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    email: string;
    imageSize?: MantineSize | (string & {}) | number;
    icon?: React.ReactNode;
    menuPosition?: FloatingPosition
}

const UserButton = React.forwardRef<HTMLButtonElement, IUserButtonProps>(
    ({ image, name, email, icon, imageSize, menuPosition, ...others }: IUserButtonProps, ref) => (
        <UnstyledButton
            ref={ref}
            style={{
                padding: '8px 12px',
                color: 'var(--mantine-color-text)',
                borderRadius: 'var(--mantine-radius-sm)',
            }}
            {...others}
        >
            <Group className="!gap-2 !flex-nowrap group">
                <Avatar
                    size={imageSize || "sm"}
                    src={image}
                    radius="xl"
                    className="cursor-pointer"
                />
                <motion.section style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        {name}
                    </Text>
                    <Text c="dimmed" size="xs">
                        {email}
                    </Text>
                </motion.section>

                {icon || <IoChevronForward className={classNames(`transition-transform duration-300`, {
                    'group-hover:-rotate-90': menuPosition === "top",
                    'group-hover:rotate-90': menuPosition === "bottom"
                })}
                    size="1rem"
                />}
            </Group>
        </UnstyledButton>
    )
);

export {
    UserButton
}
