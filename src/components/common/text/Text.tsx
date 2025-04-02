/** @format */

import { Text, TextProps } from "@radix-ui/themes";
import React from "react";

export type ITextProps = TextProps & {
    displayText: string;
};

const TextView: React.FunctionComponent<ITextProps> = (props) => {
    const { displayText, ...rest } = props;
    return <Text {...rest}>{displayText}</Text>;
};

export { TextView as Text };
