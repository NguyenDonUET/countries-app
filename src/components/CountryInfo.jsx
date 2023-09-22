import React from "react";

export default function CountryInfo({ title, content }) {
    return (
        <p>
            <span className="font-semibold">{title}: </span> {content}
        </p>
    );
}
