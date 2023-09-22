import React from "react";
import Inputs from "../components/Inputs";
import CountryList from "../components/CountryList";

export default function Home() {
    return (
        <div className="text-base py-6 dark:bg-darkBlueBg dark:text-white text-lightModeText min-h-full">
            <div className="container">
                <Inputs />
                <CountryList />
            </div>
        </div>
    );
}

async function loader() {}

export const HomeRoute = {
    loader,
    element: <Home />,
};
