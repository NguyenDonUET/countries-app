import { Form } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function SearchInput() {
    const [searchVal, setSearchVal] = useState("");
    const { darkTheme } = useAppContext();

    const handleSearch = (e) => {
        console.log(searchVal);
        setSearchVal("");
    };

    return (
        <Form
            onSubmit={handleSearch}
            className="flex gap-8 py-5 pl-8 pr-4 items-center border-1 rounded-lg w-full bg-white dark:bg-darkBlue shadow-lg max-w-sm"
        >
            <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
            >
                <path
                    d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"
                    fill={`${!darkTheme ? "hsl(0, 0%, 52%)" : "#fff"}`}
                />
            </svg>
            <input
                className="bg-transparent border-none outline-none dark:text-white flex-1 dark:placeholder:text-white placeholder:text-base text-xl font-semibold"
                autoComplete="off"
                type="search"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search for a country..."
            />
        </Form>
    );
}
