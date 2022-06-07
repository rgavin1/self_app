export type Credentials = {
    username: string;
    password: string;
}

export type AuthorizationHook = {
    isLoading: boolean;
    hasCreds: boolean;
    hasError: boolean;
    login: (creds: Credentials) => void;
}