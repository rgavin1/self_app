import { useState, useContext, createContext } from 'react';
import { getAccessToken } from '../services/authorization';
import { Credentials, AuthorizationHook } from '../utils/types';



const AuthContext = createContext<AuthorizationHook | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (creds: Credentials) => {
        (async () => {
            const access = await getAccessToken(creds);
            if (!access) return;
            setIsLoggedIn(true);
        })()
    }
    // const logout = () => setUser();

    return (<AuthContext.Provider value={{ login, isLoggedIn }}> {children} </AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}