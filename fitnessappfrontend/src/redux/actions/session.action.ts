import { ActionTypes } from '../action-types';
import { ICredentials, IUserData, IUser } from '../interfaces';
import { initialState } from '../initial-state';
import { appClient } from '../../axios/app.client';

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
const uusers: IUserData[] = [
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
export const login = (credentials: ICredentials) => async (dispatch) => {
    const user = (await appClient.post(`/auth`, credentials)).data;
    console.log('Add Content-Type To Accepatable headers in api. WebConfig');
    if (user) {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: user
        });
        dispatch({
            type: ActionTypes.APP,
            payload: {
                isLoggedIn: true,
                isAdmin: (user.accountType.role === 'Admin')
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