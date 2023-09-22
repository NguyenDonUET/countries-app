import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import AppContextProvider from "./context/AppContext";

export default function RootLayout() {
    return (
        <AppContextProvider>
            <Header />
            <main className="dark:bg-darkBlueBg bg-lightGrayBgs h-full mt-headerHeight min-h-full">
                <Outlet />
            </main>
            <Footer />
        </AppContextProvider>
    );
}
