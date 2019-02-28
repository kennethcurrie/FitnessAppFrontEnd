import { ActionTypes } from '../action-types';
import { ICredentials } from '../interfaces';
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

export const login = (credentials: ICredentials) => async (dispatch) => {
    try {
        const res = (await appClient.post('auth', credentials));

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.LOGIN,
                payload: { ...res.data }
            });
            dispatch({
                type: ActionTypes.APP,
                payload: {
                    isLoggedIn: true,
                    isAdmin: (res.data.accountType.role === 'Admin')
                }
            });
        } else if (res.status === 401) {
            console.log('401');
        }
    }
    catch (err) {
        console.log(err);
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: ActionTypes.LOGOUT,
        payload: initialState.session.user
    });

    dispatch({
        type: ActionTypes.APP,
        payload: initialState.app
    });

    dispatch(updateCredentials('', ''));
};