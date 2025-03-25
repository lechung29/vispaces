import { motion } from "framer-motion";
import { TextInput, PasswordInput, Avatar, ActionIcon, Modal, Button, Notification } from "@mantine/core";

const AnimatedTextInput = motion(TextInput);

const AnimatedButton = motion(Button as any);

const AnimatedDefaultButton = motion("button");

const AnimatedPasswordInput = motion(PasswordInput);

const AnimatedAvatar = motion(Avatar as any);

const AnimatedIconButton = motion(ActionIcon as any)

const AnimatedDialog = motion(Modal)

const AnimatedNotification = motion(Notification)

export {
    AnimatedTextInput,
    AnimatedButton,
    AnimatedPasswordInput,
    AnimatedAvatar,
    AnimatedIconButton,
    AnimatedDialog,
    AnimatedDefaultButton,
    AnimatedNotification as Notification
}