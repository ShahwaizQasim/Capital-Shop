import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase';

export const AdminContext = createContext();

function AdminContextProvider({ children }) {
    const [AdminData, setAdminData] = useState({
        AdminLogin: false,
        AdminInfo: {}
    });

    console.log("AdminData in context", AdminData);
    
    // useEffect(() => {

    // }, [])
    return (
        <AdminContext.Provider value={[AdminData, setAdminData]}>
            {children}
        </AdminContext.Provider>
    )

}



export default AdminContextProvider;