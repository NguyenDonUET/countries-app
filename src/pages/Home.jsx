import React from "react";
import Inputs from "../components/Inputs/Inputs";
import { countryApi } from "../api/api";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import CountryList from "../components/Country/CountryList";
import Loading from "../components/Loading";
import { createPortal } from "react-dom";

export default function Home() {
    const countries = useLoaderData();
    const { searchVal, region } = useAppContext();
    const { state } = useNavigation();
    const isLoading = state === "loading";

    // Filter countries
    const filteredCountries = countries.filter(
        (country) =>
            country.name.common
                .toLowerCase()
                .includes(searchVal.toLowerCase()) &&
            country.region.includes(region)
    );
    // console.log(filteredCountries);

    return (
        <div className="text-base py-6 dark:bg-darkBlueBg dark:text-white text-lightModeText min-h-full">
            <div className="container">
                <Inputs />
                {isLoading ? (
                    createPortal(
                        <Loading />,
                        document.querySelector("#loading-container")
                    )
                ) : (
                    <CountryList countries={filteredCountries} />
                )}
            </div>
        </div>
    );
}

async function loader({ request: { signal } }) {
    // console.log("loader");
    return await countryApi.getAllCountries({ signal });
}

export const HomeRoute = {
    loader,
    element: <Home />,
};
