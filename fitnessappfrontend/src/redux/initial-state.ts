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
    ],
    excerciseChartState: {
        workoutType: 'dips',
        excerciseData: [
            [Date.UTC(2019, 1, 1), 1],
            [Date.UTC(2019, 1, 2), 5],
            [Date.UTC(2019, 1, 3), 1],
            [Date.UTC(2019, 1, 4), 8],
            [Date.UTC(2019, 1, 5), 16],
            [Date.UTC(2019, 1, 5), 12],
            [Date.UTC(2019, 1, 25), 3],
            [Date.UTC(2019, 1, 26), 14],
            [Date.UTC(2019, 1, 27), 7],
            [Date.UTC(2019, 1, 28), 15]
        ]
    }
};