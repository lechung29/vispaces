import { IoChevronForward } from "react-icons/io5";
import { Group, Avatar, Text, UnstyledButton, MantineSize } from '@mantine/core';
import React from 'react'
import {motion} from "framer-motion"

interface IUserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    image: string;
    name: string;
    email: string;
    imageSize?: MantineSize | (string & {}) | number;
    icon?: React.ReactNode;
}

const UserButton = React.forwardRef<HTMLButtonElement, IUserButtonProps>(
    ({ image, name, email, icon, imageSize, ...others }: IUserButtonProps, ref) => (
        <UnstyledButton
            ref={ref}
            style={{
                padding: '8px 12px',
                color: 'var(--mantine-color-text)',
                borderRadius: 'var(--mantine-radius-sm)',
            }}
            {...others}
        >
            <Group className="!gap-2 !flex-nowrap">
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

                {icon || <IoChevronForward size="1rem" />}
            </Group>
        </UnstyledButton>
    )
);

export {
    UserButton
}
