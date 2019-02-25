import { ActionTypes } from '../action-types';
import { initialState } from '../initial-state';

export const appReducer = (state = initialState.app, action: any) => {
    switch (action.type) {
        case ActionTypes.APP:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};