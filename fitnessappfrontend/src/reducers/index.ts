import { combineReducers } from "redux";
// import { clickerReducer } from "./Clicker.reducer";
import { chuckNorrisReducer } from "./ChuckNorris.reducer";
// import { ticTacToeReducer } from "./TicTacToe.reducer";

export interface IClickerState {
  clicks: number
}

export interface IChuckNorrisState {
  joke: string
}

export interface ITicTacToeState{
  game:[string[],string[],string[]],
  message:string,
  playerTurn:boolean,
  winner:number
}

export interface IState {
  // clicker: IClickerState,
  chuckNorris: IChuckNorrisState
  // ticTacToe: ITicTacToeState
}

export const state = combineReducers<IState>({
  // clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer,
  // ticTacToe: ticTacToeReducer
})
