export type User = {
    username: string;
    password: string;
}

export type Login = {
    user: User;
    login: (user1: User) => void;
}