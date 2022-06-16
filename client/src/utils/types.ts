import { SetStateAction, Dispatch } from 'react'

export type Credentials = {
    username: string;
    password: string;
}

export type AuthorizationHook = {
    auth: any;
    setAuth: Dispatch<SetStateAction<any>>;
}