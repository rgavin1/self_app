import { useState, useContext, createContext } from 'react';
import { getAccessToken } from '../services/authorization';
import { Credentials, AuthorizationHook } from '../utils/types';



const AuthContext = createContext<AuthorizationHook | null>(null);

export const AuthProvider = ({ children }: any) => {
    const login = async (creds: Credentials): Promise<string> => {
        const access_token = await getAccessToken(creds);
        return access_token;
    }

    // const logout = () => setUser();

    return (<AuthContext.Provider value={{ login }}> {children} </AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}