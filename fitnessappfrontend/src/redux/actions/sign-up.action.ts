import { ActionTypes } from '../action-types';
import { IUser } from '../interfaces';

export const updateUsername = (value: string) => {
    return {
        type: ActionTypes.UPDATE_USERNAME,
        payload: value
    };
};

export const updatePassword = (value: string) => {
    return {
        type: ActionTypes.UPDATE_PASSWORD,
        payload: value
    };
};

export const updateName = (value: string) => {
    return {
        type: ActionTypes.UPDATE_NAME,
        payload: value
    };
};

export const updateEmail = (value: string) => {
    return {
        type: ActionTypes.UPDATE_EMAIL,
        payload: value
    };
};

export const signUp = (signUpFields: IUser) => (dispatch) => {
    console.log(`Profile Created: ${signUpFields}`);
    dispatch({
        type: ActionTypes.SIGN_UP,
        payload: { ...signUpFields }
    });

    dispatch(updateUsername(''));
    dispatch(updatePassword(''));
    dispatch(updateName(''));
    dispatch(updateEmail(''));
};