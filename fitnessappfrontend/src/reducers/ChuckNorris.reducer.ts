import { IChuckNorrisState } from ".";
import { chuckNorrisTypes } from "../actions/chuck-norris/ChuckNorris.actions";

const initialState: IChuckNorrisState = {
  joke: 'A snake bit chuck norris after 5 painful days the snake died',
  //disableBuyJoke: false
}

export const chuckNorrisReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case chuckNorrisTypes.BUY_JOKE:
      return {
        ...state,
        joke: action.payload.joke
      }
    case chuckNorrisTypes.TOGGLE_BUY_JOKE:
      return {
        ...state,
        disableBuyJoke: action.payload.isDisabled
      }
  }
  return state;
}
