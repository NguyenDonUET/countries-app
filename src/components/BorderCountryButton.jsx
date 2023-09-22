import React from "react";
import { Link } from "react-router-dom";

export default function BorderCountryButton({ text, to }) {
    return (
        <Link
            to={to}
            className="dark:hover:bg-btnHover transition-all px-8 py-2 dark:bg-darkBlue dark:text-lightGrayBg rounded-md shadow-lg border dark:border-none hover:bg-btnHover hover:text-lightGrayBg"
        >
            {text}
        </Link>
    );
}
