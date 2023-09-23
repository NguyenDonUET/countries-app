import React, { useContext, useState } from "react";
// Tạo context
export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
