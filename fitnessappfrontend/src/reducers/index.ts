import { combineReducers } from 'redux';
import { sessionReducer } from './session.reducer';

export interface ISessionState {
    userid: number;
    username: string;
    name: string;
    role: number;
    email: string;
    private: boolean;
}

export interface IState {
    user: ISessionState;
}

export const state = combineReducers<IState>({
    user: sessionReducer
});

