import { motion } from "framer-motion";
import { TextInput, PasswordInput } from "@mantine/core";

const AnimatedTextInput = motion(TextInput);

const AnimatedButton = motion("button");

const AnimatedPasswordInput = motion(PasswordInput);

export {
    AnimatedTextInput,
    AnimatedButton,
    AnimatedPasswordInput
}