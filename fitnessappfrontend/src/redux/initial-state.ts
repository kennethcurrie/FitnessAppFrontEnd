import { IState } from './interfaces';

export const initialState: IState = {
    session: {
        loggedIn: false,
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
    }
};