import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const options = [
    {
        id: 1,
        text: "Antarctic",
    },
    {
        id: 2,
        text: "Americas",
    },
    {
        id: 3,
        text: "Asia",
    },
    {
        id: 4,
        text: "Europe",
    },
    {
        id: 5,
        text: "Oceania",
    },
    {
        id: 6,
        text: "Africa",
    },
];
export default function FilterInput() {
    const { region, setRegion, regionOptions } = useAppContext();

    return (
        <div className="w-1/2 md:max-w-[176px] text-white">
            <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full dark:bg-darkBlue border-none focus:border focus:border-gray-300 dark:text-white text-darkGray font-semibold shadow-lg text-sm rounded-lg block py-4 pl-6 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value={""}>Filter by Region</option>
                {options.map((option) => {
                    return (
                        <option key={option.id} value={option.text}>
                            {option.text}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
