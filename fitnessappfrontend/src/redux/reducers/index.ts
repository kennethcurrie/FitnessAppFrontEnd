import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';
import { submitWorkoutReducer } from './submit-workout.reducer';
import { sessionReducer } from './session.reducer';
import { signUpReducer } from './sign-up.reducer';
import { allUsersReducer } from './all-user.reducer';
import { exerciseChartReducer } from './exerciseChart.reducer';

export default combineReducers({
    app: appReducer,
    session: sessionReducer,
    workoutFields: submitWorkoutReducer,
    signUpFields: signUpReducer,
    users: allUsersReducer,
    exerciseChartState: exerciseChartReducer
});