import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';
import { submitWorkoutReducer } from './submit-workout.reducer';
import { sessionReducer } from './session.reducer';
import { signUpReducer } from './sign-up.reducer';

export default combineReducers({
    app: appReducer,
    session: sessionReducer,
    workoutFields: submitWorkoutReducer,
    signUpFields: signUpReducer
});