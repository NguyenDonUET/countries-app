import React from "react";
import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
    return (
        <div className="mt-8 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {countries.length > 0 &&
                countries.map((country) => {
                    return <CountryCard key={country.cca2} country={country} />;
                })}
        </div>
    );
}
