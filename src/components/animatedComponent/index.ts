import { motion } from "framer-motion";
import { TextInput, PasswordInput, Avatar, ActionIcon, Modal } from "@mantine/core";

const AnimatedTextInput = motion(TextInput);

const AnimatedButton = motion("button");

const AnimatedPasswordInput = motion(PasswordInput);

const AnimatedAvatar = motion(Avatar as any);

const AnimatedIconButton = motion(ActionIcon as any)

const AnimatedDialog = motion(Modal)

export {
    AnimatedTextInput,
    AnimatedButton,
    AnimatedPasswordInput,
    AnimatedAvatar,
    AnimatedIconButton,
    AnimatedDialog
}