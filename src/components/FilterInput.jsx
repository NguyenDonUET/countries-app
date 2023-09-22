import React from "react";
import { useAppContext } from "../context/AppContext";

const options = [
    {
        id: 1,
        text: "Africa",
    },
    {
        id: 2,
        text: "America",
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
];
export default function FilterInput() {
    return (
        <div className="w-1/2 md:max-w-[176px] text-white">
            <select class="w-full dark:bg-darkBlue border-none focus:border focus:border-gray-300 dark:text-white text-darkGray font-semibold shadow-lg text-sm rounded-lg block py-4 pl-6 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Filter by Region</option>
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
