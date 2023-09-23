import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
function Header() {
    const { darkTheme, setDarkTheme } = useThemeContext();

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkTheme]);

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <header className="fixed top-0 w-full text-lightModeText bg-white dark:bg-darkBlue dark:text-white h-headerHeight flex items-center shadow-md z-50">
            <div className="container flex items-center justify-between text-sm ">
                <h2 className="md:text-2xl text-base font-semibold">
                    <Link to={"/"}>Where in the world?</Link>
                </h2>
                <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => changeTheme()}
                >
                    <img
                        className="w-6 h-6"
                        src={
                            darkTheme
                                ? "/icons/moon.svg"
                                : "/icons/moon-outline.svg"
                        }
                        alt="theme-icon"
                    />
                    <h4 className="font-light">Dark Mode</h4>
                </div>
            </div>
        </header>
    );
}

export default Header;
