import { SetStateAction, Dispatch } from 'react'

export type Credentials = {
    username: string;
    password: string;
}

export type AuthorizationHook = {
    auth: any;
    setAuth: Dispatch<SetStateAction<any>>;
}

export type UserProfile = {
    fitnessGoal: string;
    height: string;
    id: string;
    image: string;
    name: string;
    sex: string;
    unitOfMeasure: string;
    userAccountId: string;
    weight: string;
}