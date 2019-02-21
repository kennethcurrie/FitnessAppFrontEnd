import { ISessionState } from '.';
import { sessionTypes } from '../actions/session.actions';

const initialState: ISessionState = {
    userid: 1,
    username: '',
    name: '',
    email: '',
    private: false,
    role: 1
};

export const sessionReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case sessionTypes.LOGIN:
            return {
                ...state,
                user: action.payload
            };

        case sessionTypes.LOGOUT:
            return {
                ...state,
                user: undefined
            };

        default:
            return state;
    }
};