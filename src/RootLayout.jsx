import React from "react";
import Header from "./components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import ThemeContextProvider from "./context/ThemeContext";
import AppContextProvider from "./context/AppContext";

export default function RootLayout() {
    return (
        <ThemeContextProvider>
            <Header />
            <AppContextProvider>
                <main className="dark:bg-darkBlueBg bg-lightGrayBgs h-full mt-headerHeight min-h-full pb-24">
                    <Outlet />
                </main>
            </AppContextProvider>
            <Footer />
        </ThemeContextProvider>
    );
}
