import React from "react";
import BackButton from "../components/Button/BackButton";
import { Link, useLoaderData } from "react-router-dom";
import { countryApi } from "../api/api";
import CountryInfo from "../components/Country/CountryInfo";
import BorderCountryButton from "../components/Button/BorderCountryButton";
import { formatPopulation } from "../utils/formatPopulation";

export default function CountryDetail() {
    const country = useLoaderData();
    // console.log("🚀 ~ country:", country);
    let {
        name: { common, official },
        population,
        flags: { png },
        region,
        subregion,
        currencies,
        borders,
        languages,
    } = country;
    const { tld } = country;
    const { capital } = country;
    return (
        <div className="min-h-full text-base mt-8">
            <div className="container">
                <BackButton />
                <div className="flex gap-8 md:gap-16 flex-col justify-center md:flex-row md:items-center md:justify-between">
                    <img
                        src={png}
                        alt={common}
                        className="basis-1/2 w-ful h-full"
                    />
                    {/* Info */}
                    <div className="flex flex-col gap-4 text-black dark:text-white basis-1/2">
                        <h3 className="font-extrabold md:text-xl text-2xl">
                            {official}
                        </h3>
                        <div className="flex flex-col gap-2">
                            <div className="country-info">
                                <CountryInfo
                                    title={"Native Name"}
                                    content={official}
                                />
                                <CountryInfo
                                    title={"Population"}
                                    content={
                                        population === 0
                                            ? "updating..."
                                            : formatPopulation(population)
                                    }
                                />

                                <CountryInfo
                                    title={"Region"}
                                    content={region}
                                />
                                <CountryInfo
                                    title={"Sub Region"}
                                    content={subregion || "updating..."}
                                />
                                <CountryInfo
                                    title={"Capital"}
                                    content={
                                        capital ? capital[0] : "updating..."
                                    }
                                />
                            </div>
                            <div className="country-info mt-4">
                                <CountryInfo
                                    title={"Top Level Domain"}
                                    content={tld ? tld[0] : "updating..."}
                                />
                                <CountryInfo
                                    title={"Currencies"}
                                    content={currencies}
                                />
                                <CountryInfo
                                    title={"Languages"}
                                    content={languages}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col  md:flex-row md:gap-2">
                            <h2 className=" capitalize font-semibold text-xl md:text-base mb-4 md:mb-0 whitespace-nowrap ">
                                Border countries:
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {borders?.length > 0
                                    ? borders.map((border) => {
                                          return (
                                              <BorderCountryButton
                                                  key={border}
                                                  text={border}
                                                  to={`/country/${border}`}
                                              />
                                          );
                                      })
                                    : "None"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const loader = async ({ params, request: { signal } }) => {
    // console.log("🚀 ~ param:", params);
    return countryApi.getCountryByCode(params.code, { signal });
};

export const CountryDetailRoutes = {
    element: <CountryDetail />,
    loader,
};
