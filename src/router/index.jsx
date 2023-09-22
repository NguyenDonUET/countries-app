import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import CountryDetail from "../pages/CountryDetail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "country/:name",
                element: <CountryDetail />,
            },

            { path: "*", element: <NotFound /> },
        ],
    },
]);
