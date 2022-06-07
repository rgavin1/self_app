export type Credentials = {
    username: string;
    password: string;
}

export type AuthorizationHook = {
    login: (creds: Credentials) => Promise<string>;
}