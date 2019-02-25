import { ActionTypes } from '../action-types';
import { appClient } from '../../axios/app.client';

export const getUsers = () => async (dispatch) => {
    try {
        const res = await appClient.get('users');
        console.log(res.data);
        if (res.status >= 200 && res.status < 300) {
            // dispatch({
            //     type: ActionTypes.GET_USERS,
            //     payload: { ...res.data }
            // });
            console.log(res.data);
        }
    }
    catch (err) {
        console.log(err);
    }
};