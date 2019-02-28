import { ActionTypes } from '../action-types';
import { ICredentials, IUserData, IExcerciseChartState } from '../interfaces';
import { initialState } from '../initial-state';
import excerciseChartComponent from '../../components/profile/excerciseChart/excerciseChart.component';

export const excerciseChartActions = {
    updateExcerciseChartProps: (newState: IExcerciseChartState) => {
        return {
            type: ActionTypes.UPDATE_EXCERCISE_CHART_COMPONENT_STATE,
            payload: newState
        };
    }
}