import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase';

export const AdminContext = createContext();

function AdminContextProvider({ children }) {
    const [AdminData, setAdminData] = useState({
        AdminLogin: false,
        AdminInfo: {}
    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.uid);
            } else {
                setAdminData({
                    AdminLogin: false,
                    AdminInfo: {}
                })
            }
        })
    }, [])
    return (
        <AdminContext.Provider value={[AdminData, setAdminData]}>
            {children}
        </AdminContext.Provider>
    )

}



export default AdminContextProvider;