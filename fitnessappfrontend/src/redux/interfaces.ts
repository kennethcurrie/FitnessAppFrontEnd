export interface IApp {
    isLoggedIn: boolean;
    isAdmin: boolean;
}

export interface ICredentials {
    username: string;
    password: string;
}

export interface IUser {
    userid: number;
    username: string;
    name: string;
    email: string;
    role: string;
    private: boolean;
    pictureUrl: string;
}

export interface ISession {
    credentials: ICredentials;
    user: IUser;
}

export interface IState {
    app: IApp;
    session: ISession;
}