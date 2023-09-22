import React from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import BorderCountryButton from "../components/BorderCountryButton";

export default function CountryDetail() {
    return (
        <div className="min-h-full text-base mt-8 pb-8 md:pb-24">
            <div className="container">
                <BackButton />
                <div className="flex gap-6 flex-col justify-center md:flex-row md:items-center md:gap-6 md:justify-between">
                    <img
                        src={"https://flowbite.com/docs/images/book-dark.svg"}
                        alt="img"
                        className="basis-1/2 w-ful max-h-[500px]"
                    />
                    {/* Info */}
                    <div className="flex flex-col gap-4 text-black dark:text-white basis-1/2">
                        <h3 className="font-extrabold text-2xl md:text-4xl">
                            Belgin
                        </h3>
                        <div className="flex flex-col gap-5">
                            <div className="country-info">
                                <p>
                                    <span className="font-semibold">
                                        Population:{" "}
                                    </span>{" "}
                                    1000,000,000{" "}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Region:{" "}
                                    </span>{" "}
                                    1000,000{" "}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Capital:{" "}
                                    </span>{" "}
                                    HaNoi{" "}
                                </p>
                            </div>
                            <div className="country-info mt-4">
                                <p>
                                    <span className="font-semibold">
                                        Population:{" "}
                                    </span>{" "}
                                    1000,000,000{" "}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Region:{" "}
                                    </span>{" "}
                                    1000,000{" "}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Capital:{" "}
                                    </span>{" "}
                                    HaNoi{" "}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col md:items-center md:flex-row gap-4">
                            <h2 className=" capitalize font-semibold text-xl md:text-base mb-4 md:mb-0 whitespace-nowrap ">
                                Border countries
                            </h2>
                            <div className="flex flex-wrap gap-2 md:flex-nowrap items-center">
                                <BorderCountryButton text={"france"} to={"/"} />
                                <BorderCountryButton text={"france"} to={"/"} />
                                <BorderCountryButton text={"france"} to={"/"} />
                                <BorderCountryButton text={"france"} to={"/"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
