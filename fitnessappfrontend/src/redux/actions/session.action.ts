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

// Temp
const users: IUser[] = [
    {
        userid: 1,
        username: 'admin',
        name: 'John Smith',
        role: 'Admin',
        email: 'jsmith@fitnessapp.com',
        private: true,
        pictureUrl: ''
    },
    {
        userid: 2,
        username: 'saitama',
        name: 'Saitama',
        role: 'User',
        email: 'admin@punchman.jp',
        private: false,
        pictureUrl: ''
    }
];

// Change to fetch when api is implemented.
export const login = (credentials: ICredentials) => {
    const user = users.find(e => {
        const isUser = (credentials.username === e.username);
        const isPass = (credentials.password === 'password');
        return (isUser && isPass);
    });

    console.log(user);

    if (user) {
        return {
            type: ActionTypes.LOGIN,
            payload: {
                user: { ...user }
            }
        };
    }

    return {
        type: ActionTypes.LOGIN,
        payload: {
            user: undefined
        }
    };
};