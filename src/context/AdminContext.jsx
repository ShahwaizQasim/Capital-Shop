import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

function AdminContext({ children }) {
    const [AdminData, setAdminData] = useState({
        AdminLogin: false,
        AdminInfo: {}
    });
    return (
        <AuthContext.Provider value={[AdminData, setAdminData]}>
            {children}
        </AuthContext.Provider>
    )

}



export default AdminContext