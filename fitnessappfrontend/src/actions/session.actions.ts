import { ISessionState } from '../reducers';

export const sessionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

export const login = (user: ISessionState) => {
    return {
        type: sessionTypes.LOGIN,
        payload: {
            ...user
        }
    };
};

export const logout = () => {
    return {
        type: sessionTypes.LOGOUT,
        payload: undefined
    };
};