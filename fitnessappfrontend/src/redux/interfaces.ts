export interface IApp {
    isLoggedIn: boolean;
    isAdmin: boolean;
}

export interface ICredentials {
    username: string;
    password: string;
}

export interface IUser {
    username: string;
    name: string;
    password?: string;
    email: string;
}

export interface IUserData extends IUser {
    userid: number;
    role: string;
    private: boolean;
    pictureUrl: string;
}

export interface ISession {
    credentials: ICredentials;
    user: IUserData;
}

export interface IPoundRep {
    lbs: number;
    reps: number;
}

export interface IWorkouts {
    running: number;
    biking: number;
    swimming: number;
    curls: IPoundRep;
    benchPress: IPoundRep;
    deadLift: IPoundRep;
    pushUps: number;
    sitUps: number;
    pullUps: number;
    squats: number;
}

export interface IState {
    app: IApp;
    session: ISession;
    workoutFields: IWorkouts;
    signUpFields: IUser;
}