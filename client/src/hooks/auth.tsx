import { useState, useContext, createContext } from 'react';
import { User, Login } from '../utils/types';



const AuthContext = createContext<Login | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>({
        username: "test1",
        password: "password",
    }
    );

    const login = (user1: User) => setUser(user1);
    // const logout = () => setUser();

    return (<AuthContext.Provider value={{ user, login }}> {children} </AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}