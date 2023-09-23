import React from "react";
import { Link } from "react-router-dom";
import { formatPopulation } from "../../utils/formatPopulation";

function CountryCard({ country }) {
    const {
        name: { common },
        population,
        flags: { png },
        region,
        capital,
        cca2,
    } = country;

    return (
        <Link
            to={`/country/${cca2}`}
            className="max-w-xs mx-auto dark:bg-darkBlue rounded-lg pb-8 shadow-lg hover:cursor-pointer
        hover:-translate-y-2 transition-all flex flex-col justify-between
        "
        >
            <img
                src={png}
                alt="img"
                className="max-w-full flex-1 max-h-96 rounded-tl-lg rounded-tr-lg"
            />
            <div className="mt-6 px-6">
                <h2 className="mb-6 text-xl font-semibold">{common}</h2>
                <div className="country-info">
                    <p>
                        <span className="font-semibold">Population: </span>{" "}
                        {formatPopulation(population)}
                    </p>

                    <p>
                        <span className="font-semibold">Region: </span> {region}
                    </p>
                    <p>
                        <span className="font-semibold">Capital: </span>
                        {capital ? capital[0] : ""}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default CountryCard;
