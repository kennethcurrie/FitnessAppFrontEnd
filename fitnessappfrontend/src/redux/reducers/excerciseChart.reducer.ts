import { ActionTypes } from '../action-types';
import { initialState } from '../initial-state';

export const excerciseChartReducer = (state = initialState.excerciseChartState, action: any) => {
    switch (action.type) {
        
        case ActionTypes.UPDATE_EXCERCISE_CHART_COMPONENT_STATE:
            return {
                ...state, 
                excersiseChartProps: action.payload
            };

        default:
            return state;
    }
};