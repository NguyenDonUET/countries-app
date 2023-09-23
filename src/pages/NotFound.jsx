import React from "react";

export default function NotFound() {
    return (
        <div className="w-full mt-20">
            <div className="flex flex-col gap-2 items-center text-darkBlue dark:text-white">
                <h1 className="text-6xl font-extrabold  ">404</h1>
                <p className="text-4xl">Page not found</p>
            </div>
        </div>
    );
}
