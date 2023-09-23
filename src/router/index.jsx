import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import { HomeRoute } from "../pages/Home";
import { CountryDetailRoutes } from "../pages/CountryDetail";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, ...HomeRoute },
            {
                path: "country/:code",
                ...CountryDetailRoutes,
            },

            { path: "*", element: <NotFound /> },
        ],
    },
]);
