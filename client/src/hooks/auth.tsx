import { useContext, createContext, useState } from 'react';
import { AuthorizationHook } from '../utils/types';



const AuthContext = createContext<AuthorizationHook | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<AuthorizationHook | null>(null)

    return (<AuthContext.Provider value={{ auth, setAuth }}> {children} </AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}