import React from "react";

export default function Countries() {
    return <div>Countries</div>;
}

async function loader() {}

export const CountriesRoute = {
    loader,
    element: <Countries />,
};
