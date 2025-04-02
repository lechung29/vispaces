/** @format */

import React from "react";
import { LinkProps, Link } from "react-router-dom";

export interface ILinkProps extends LinkProps {
    displayText: string;
}

const LinkView: React.FunctionComponent<ILinkProps> = (props) => {
    const { displayText, ...rest } = props;
    return <Link {...rest}>{displayText}</Link>;
};

export { LinkView as Link };
