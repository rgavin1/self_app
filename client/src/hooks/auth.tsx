import { useState, useContext, createContext } from 'react';
import { getAccessToken } from '../services/authorization';
import { Credentials, AuthorizationHook } from '../utils/types';



const AuthContext = createContext<AuthorizationHook | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [hasCreds, setHasCreds] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, sethasError] = useState(false);

    const login = (creds: Credentials) => {
        (async () => {
            sethasError(false)
            setIsLoading(true);

            try {
                const access = await getAccessToken(creds);
                if (!access) return;
                setHasCreds(true);
            } catch {
                sethasError(false)
            }
            setIsLoading(false)
        })()
    }
    // const logout = () => setUser();

    return (<AuthContext.Provider value={{ login, hasCreds, hasError, isLoading }}> {children} </AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}