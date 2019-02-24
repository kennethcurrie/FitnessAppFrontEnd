import { combineReducers } from 'redux';
import { ActionTypes } from './action-types';
import { initialState } from './initial-state';

export const appReducer = (state = initialState.app, action: any) => {
    switch (action.type) {
        case ActionTypes.APP:
            return {
                ...action.payload
            };

        default:
            return state;
    }
};

export const sessionReducer = (state = initialState.session, action: any) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CREDS:
            return {
                ...state,
                credentials: { ...action.payload }
            };

        case ActionTypes.LOGIN:
            return {
                ...state,
                user: { ...action.payload }
            };

        case ActionTypes.LOGOUT:
            return action.payload;

        default:
            return state;
    }
};

export const state = combineReducers({
    app: appReducer,
    session: sessionReducer
});