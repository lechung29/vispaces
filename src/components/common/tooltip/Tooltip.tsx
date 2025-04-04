/** @format */

import { Tooltip } from "radix-ui";
import React from "react";
import "./index.scss";

export interface ITooltipRef {}

export interface ITooltipProps {
    tooltipContent: string;
    element: React.ReactNode;
    side?: "bottom" | "left" | "right" | "top";
}

const TooltipView = React.forwardRef<ITooltipRef, ITooltipProps>((props, _ref) => {
    const { tooltipContent, element, side = "top" } = props;
    return (
        <Tooltip.Provider delayDuration={500} disableHoverableContent={true}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{element}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="g-tooltipContent" sideOffset={5} side={side}>
                        <div className="g-tooltipContent-Text">{tooltipContent}</div>
                        <Tooltip.Arrow className="g-tooltipArrow" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
});
export { TooltipView as Tooltip };
