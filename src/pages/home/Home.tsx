/** @format */

import { CommonPost, NewPost } from "@/components";
import React from "react";
import { OnlineFriend, PeopleMightKnow, StoryList } from "@/components";
import { ScrollArea } from "@radix-ui/themes";
import "./index.scss";

interface IHomePageProps {}

const HomeView: React.FunctionComponent<IHomePageProps> = (_props) => {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    return (
        <section className="g-home-page-section">
            <div className="g-home-story-part">
                <StoryList />
            </div>
            <div className="g-home-content-part">
                <div className="g-home-content-part-left">
                    <NewPost />
                    <CommonPost />
                    <CommonPost />
                    <CommonPost />
                </div>
                <div className="g-home-content-part-right">
                    <ScrollArea
                        className="g-home-right-scrollbar"
                        size="1"
                        type="scroll"
                        scrollbars="both"
                        scrollHideDelay={1000}
                        style={{
                            height: "100vh",
                        }}
                    >
                        <div className="g-home-content-part-right-listPlace">
                            <PeopleMightKnow />
                            <OnlineFriend />
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </section>
    );
};

export { HomeView as Home };
