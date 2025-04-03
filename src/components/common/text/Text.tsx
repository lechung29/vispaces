/** @format */

import { Text, TextProps } from "@radix-ui/themes";
import React from "react";

export interface ITextRef {

}

export type ITextFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ITextProps = TextProps & {
    displayText: string;
    fontSize?: number;
    fw?: ITextFontWeight;
    ref?: React.ForwardedRef<ITextRef>
};

const TextView = React.forwardRef<ITextRef, ITextProps>((props, _ref) => {
    const { displayText, style, fontSize = 16, fw = 400, ...rest } = props;
    return (
        <Text
            {...rest}
            style={{
                ...style,
                fontSize: `${fontSize}px!important`,
                fontWeight: `${fw}!important`,
            }}
        >
            {displayText}
        </Text>
    );
});

export { TextView as Text };
