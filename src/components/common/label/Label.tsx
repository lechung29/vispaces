/** @format */

import { classNames } from "@/utils";
import { Label } from "radix-ui";
import React from "react";
import "./index.scss"

export type ILabelProps = Label.LabelProps & {
    displayText: string;
};

const LabelView: React.FunctionComponent<ILabelProps> = (props) => {
    const { displayText, className, ...rest } = props;
    return <Label.Root 
        {...rest}
        className={classNames("g-labelRoot", className)}
    >
        {displayText}
    </Label.Root>;
};

export { LabelView as Label };
