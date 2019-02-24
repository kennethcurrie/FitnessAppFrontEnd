import { ActionTypes } from '../action-types';
import { ICredentials, IUser } from '../interfaces';
import { initialState } from '../initial-state';

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
export const login = (credentials: ICredentials) => (dispatch) => {
    const user = users.find(e => {
        const isUser = (credentials.username === e.username);
        const isPass = (credentials.password === 'password');
        return (isUser && isPass);
    });

    if (user) {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: {
                user: { ...user }
            }
        });
        dispatch({
            type: ActionTypes.APP,
            payload: {
                isLoggedIn: true,
                isAdmin: (user.role === 'Admin')
            }
        });
    }

    dispatch(updateCredentials('', ''));
};

export const logout = () => (dispatch) => {
    dispatch({
        type: ActionTypes.LOGOUT,
        payload: {
            ...initialState.session.user
        }
    });

    dispatch({
        type: ActionTypes.APP,
        payload: {
            ...initialState.app
        }
    });

    dispatch(updateCredentials('', ''));
};