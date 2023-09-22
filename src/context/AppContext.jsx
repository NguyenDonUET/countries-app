import React, { useContext, useState } from "react";
// Tạo context
export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

export const useAppContext = () => {
    return useContext(AppContext);
};
