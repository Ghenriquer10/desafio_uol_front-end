import React, {useState, createContext} from 'react';

export const DataContext = createContext({})

function DataProvider({children}){

    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [index, setIndex] = useState();
    const [allUsers, setAllusers] = useState();

    return(
        <DataContext.Provider value={{editModal, 
        setEditModal, 
        index, 
        setIndex, 
        allUsers, 
        setAllusers, 
        deleteModal, 
        setDeleteModal
        }}>
            {children}
        </DataContext.Provider>
    ) 

}

export default DataProvider;
