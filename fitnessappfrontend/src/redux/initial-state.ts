import { IState } from './interfaces';

export const initialState: IState = {
    app: {
        isLoggedIn: false,
        isAdmin: false
    },
    session: {
        credentials: {
            username: '',
            password: ''
        },
        user: {
            userid: 0,
            username: '',
            email: '',
            role: '',
            private: false,
            name: '',
            pictureUrl: ''
        }
    },
    workoutFields: {
        running: 0,
        biking: 0,
        swimming: 0,
        curls: {
            lbs: 0,
            reps: 0
        },
        benchPress: {
            lbs: 0,
            reps: 0
        },
        deadLift: {
            lbs: 0,
            reps: 0
        },
        squats: 0,
        pushUps: 0,
        sitUps: 0,
        pullUps: 0
    },
    signUpFields: {
        username: '',
        name: '',
        password: '',
        email: ''
    },
    users: [
        {
            userid: 1,
            username: 'Bob',
            name: 'Bob Dylan',
            email: 'email',
            role: 'associate',
            private: false
        }
    ]
};