import { createContext, useContext, useState } from "react";


const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [role, setRole] = useState('guest')
    const [open, setOpen] = useState(false);

    return (
        <UserContext.Provider value={{ role, setRole, open, setOpen }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
