import React from "react";

function CountryCard() {
    return (
        <div
            className="max-w-xs mx-auto dark:bg-darkBlue rounded-lg pb-8 shadow-lg hover:cursor-pointer
        hover:-translate-y-2 transition-all 
        "
        >
            <img
                src={"https://flowbite.com/docs/images/book-dark.svg"}
                alt="img"
                className="max-w-full"
            />
            <div className="mt-6 px-6">
                <h2 className="mb-6 text-base font-semibold">
                    Lorem ipsum dolor sit{" "}
                </h2>
                <div className="country-info">
                    <p>
                        <span className="font-semibold">Population: </span>{" "}
                        1000,000,000{" "}
                    </p>

                    <p>
                        <span className="font-semibold">Region: </span> 1000,000{" "}
                    </p>
                    <p>
                        <span className="font-semibold">Capital: </span> HaNoi{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;
