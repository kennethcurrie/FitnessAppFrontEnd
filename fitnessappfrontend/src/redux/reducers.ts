import { combineReducers } from 'redux';
import { ActionTypes } from './action-types';
import { initialState } from './initial-state';

export const sessionReducer = (state = initialState.session, action: any) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CREDS:
        return {
            ...state,
            credentials: {
                ...action.payload
            }
        };

        case ActionTypes.LOGIN:
            return {
                ...state,
                user: {
                    ...action.payload
                }
            };

        case ActionTypes.LOGOUT:
            return state;

        default:
            return state;
    }
};

export const state = combineReducers({
    session: sessionReducer
});