import React from "react";
import CountryCard from "./CountryCard";

const data = [1, 2, 3, 4, 5];

export default function CountryList() {
    return (
        <div className="mt-8 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((item) => {
                return <CountryCard key={item} />;
            })}
        </div>
    );
}
