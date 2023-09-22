import { Navigate, createBrowserRouter } from "react-router-dom";
import Countries from "../pages/Countries";
import CountryDetail from "../pages/CountryDetail";
import NotFound from "../pages/NotFound";
import RootLayout from "../RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Countries /> },
            {
                path: "country/:name",
                element: <CountryDetail />,
            },

            { path: "*", element: <NotFound /> },
        ],
    },
]);
