import { IState } from './interfaces';

export const initialState: IState = {
    app: {
        isLoggedIn: true,
        isAdmin: true
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
    }
};