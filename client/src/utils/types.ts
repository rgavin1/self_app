export type Credentials = {
    username: string;
    password: string;
}

export type AuthorizationHook = {
    isLoggedIn: boolean;
    login: (creds: Credentials) => void;
}