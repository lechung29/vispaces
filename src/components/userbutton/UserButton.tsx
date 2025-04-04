/** @format */

import { IoChevronForward } from "react-icons/io5";
import React from "react";
import { classNames } from "@/utils";
import { Button } from "@radix-ui/themes";
import { BaseButton } from "@radix-ui/themes/components/_internal/base-button";
import { Avatar, defaultIconStyle, Text } from "../common";
import "./index.scss";

interface IUserButtonProps extends React.ComponentPropsWithoutRef<typeof BaseButton> {
    image: string;
    name: string;
    email: string;
    icon?: React.ReactNode;
    menuPosition?: "top" | "bottom";
}

const UserButton = React.forwardRef<HTMLButtonElement, IUserButtonProps>(({ image, name, email, icon, menuPosition, ...others }: IUserButtonProps, ref) => (
    <Button {...others} ref={ref} className="g-user-button-wrapper">
        <div className="g-user-button-wrapper-button group">
            <Avatar size="2" src={image} radius="full" avatarName="Killian Le" />
            <div className="flex-1">
                <Text fontSize={14} fw={400} as="p" displayText={name} />
                <Text fontSize={14} fw={400} as="p" displayText={email} />
            </div>

            {icon || (
                <IoChevronForward
                    className={classNames(`transition-transform duration-300`, {
                        "group-hover:-rotate-90": menuPosition === "top",
                        "group-hover:rotate-90": menuPosition === "bottom",
                    })}
                    style={defaultIconStyle}
                />
            )}
        </div>
    </Button>
));

export { UserButton };
