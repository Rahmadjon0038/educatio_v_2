import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie'
import { useGetuser } from "../hooks/users/useUsers";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const id = Cookies.get('userid');
    const { data, isLoading, error } = useGetuser(id ?? null);
    const [role, setRole] = useState('guest')
    const [open, setOpen] = useState(false);

    return (
        <UserContext.Provider value={{ role, setRole, open, setOpen, data, isLoading, error }}>
            {children}
        </UserContext.Provider>
    )
}

export const    useUser = () => useContext(UserContext)
