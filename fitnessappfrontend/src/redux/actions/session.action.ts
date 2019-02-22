import { ActionTypes } from '../action-types';
import { ICredentials, IUser } from '../interfaces';

export const updateCredentials = (username: string, password: string) => {
    return {
        type: ActionTypes.UPDATE_CREDS,
        payload: {
            password,
            username
        }
    };
};

export const login = (credentials: ICredentials) => {
    const user: IUser = {
        userid: 1,
        username: 'admin',
        name: 'John Smith',
        role: 'Admin',
        email: 'jsmith@fitnessapp.com',
        private: true,
        pictureUrl: ''
    };

    const isUser = (credentials.username === user.username);
    const isPass = (credentials.password === 'password');

    if (isUser && isPass) {
        return {
            type: ActionTypes.LOGIN,
            payload: {
                loggedIn: true,
                user: { ...user }
            }
        };
    }
    return {
        type: ActionTypes.LOGIN,
        payload: {
            loggedIn: false
        }
    };
};