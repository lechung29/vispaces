import { IFunc2 } from "@/types/Function"

const TooltipItem: IFunc2<JSX.Element, string, JSX.Element> = (item, label) => {
    return (
        // <Tooltip
        //     label={label}
        //     style={{
        //         color: "white",
        //         background: "linear-gradient(90deg,#d63c68,#6a82fb)",
        //         fontSize: "13px",
        //         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        //     }}
        //     styles={{
        //         arrow: {
        //             background: "#d63c68"
        //         }
        //     }}
        //     position={"right"}
        //     color="rgba(255, 255, 255, 1)"
        //     openDelay={100}
        //     closeDelay={100}
        //     arrowSize={6}
        //     transitionProps={{
        //         transition: 'fade-right',
        //         duration: 300
        //     }}
        //     withArrow
        //     events={{
        //         focus: true,
        //         hover: true,
        //         touch: true,
        //     }}
        // >
        //     {item}
        // </Tooltip>
        <></>
    )
}

export {
    TooltipItem
}
