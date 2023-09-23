import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";

function BackButton() {
    const { darkTheme } = useThemeContext();

    return (
        <Link
            to={"/"}
            className="max-w-[160px] flex items-center
             px-10 py-3 rounded-md shadow-md dark:hover:bg-btnHover 
            gap-2 dark:text-white dark:bg-darkBlue text-darkBlue mb-12 group"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon group-hover:translate-x-[-8px] transition-all"
                viewBox="0 0 512 512"
                width={24}
                height={24}
                fill={`${darkTheme ? "#fff" : "hsl(209, 23%, 22%)"}`}
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M244 400L100 256l144-144M120 256h292"
                />
            </svg>
            Back
        </Link>
    );
}

export default BackButton;
