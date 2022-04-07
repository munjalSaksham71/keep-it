import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterContextProvider = ({children}) => {
    const [label, setLabel] = useState('');
    return <FilterContext.Provider value={{label, setLabel}}>{children}</FilterContext.Provider>
}

export {useFilter, FilterContextProvider};