import { motion } from "framer-motion";
import { SubmitButton, TextField } from "../common";
import { Avatar, Dialog, IconButton } from "@radix-ui/themes";

const AnimatedTextInput = motion(TextField as any);

const AnimatedButton = motion(SubmitButton as any); 

const AnimatedDefaultButton = motion("button");

// const AnimatedPasswordInput = motion(PasswordInput);

const AnimatedAvatar = motion(Avatar as any);

const AnimatedIconButton = motion(IconButton as any)

const AnimatedDialog = motion(Dialog as any)

const AnimatedNotification = motion("div")

export {
    AnimatedTextInput,
    AnimatedButton,
    AnimatedAvatar,
    AnimatedIconButton,
    AnimatedDialog,
    AnimatedDefaultButton,
    AnimatedNotification as Notification
}