import React, { useContext, useState } from 'react';
// Tạo context
export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState('');
  const [region, setRegion] = useState('');

  return (
    <AppContext.Provider
      value={{
        searchVal,
        region,
        setSearchVal,
        setRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
