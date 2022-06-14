import React, {useState, createContext} from 'react';

export const DataContext = createContext({})

function DataProvider({children}){

    const [editModal, setEditModal] = useState(false);
    const [index, setIndex] = useState();
    const [allUsers, setAllusers] = useState();

    return(
        <DataContext.Provider value={{editModal, 
        setEditModal, 
        index, 
        setIndex, 
        allUsers, 
        setAllusers
        }}>
            {children}
        </DataContext.Provider>
    ) 

}

export default DataProvider;
