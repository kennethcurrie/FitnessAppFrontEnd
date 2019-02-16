:: Project name
	set /p name=Project name(lowercase):
	call npx create-react-app %name% --Typescript
	cd %name%
:: Folder Creation
	mkdir src\axios
	mkdir src\include
	mkdir src\reducers
	mkdir src\actions\chuck-norris
	mkdir src\components\chuck-norris
:: Installation
	call npm install bootstrap jquery popper.js reactstrap tether
	call npm install bootstrap jquery popper.js reactstrap tether
	call npm install react-router react-router-dom
	call npm install -D @types/react-router @types/react-router-dom @types/reactstrap @types/node @types/react @types/react-dom
	call npm install axios
	call npm install redux react-redux redux-logger redux-thunk
	call npm install -D @types/redux-logger @types/react-redux 
	call npm install -D node-sass
	call npm install -D enzyme enzyme-adapter-react-16 
	call npm install -D @types/enzyme @types/enzyme-adapter-react-16
	call npm install typescript
	call npm install -D react-test-renderer
:: Bootstrap file
	echo.import * as $ from 'jquery';>> src\include\Bootstrap.js
	echo.import Popper from 'popper.js';>> src\include\Bootstrap.js
	echo.import Tether from 'tether';>> src\include\Bootstrap.js
	echo.import 'bootstrap';>> src\include\Bootstrap.js
	echo.import 'bootstrap/dist/css/bootstrap.min.css'>> src\include\Bootstrap.js
	echo.>> src\include\Bootstrap.js
	echo.window.Tether = Tether;>> src\include\Bootstrap.js
	echo.window.Popper = Popper;>> src\include\Bootstrap.js
	echo.window.jQuery = window.$ = $;>> src\include\Bootstrap.js
:: TSConfig file
	echo.{>>tsconfig.json
	echo.  "compilerOptions": {>>tsconfig.json
	echo.    "target": "es5",>>tsconfig.json
	echo.    "lib": [>>tsconfig.json
	echo.      "dom",>>tsconfig.json
	echo.      "dom.iterable",>>tsconfig.json
	echo.      "esnext">>tsconfig.json
	echo.    ],>>tsconfig.json
	echo.    "allowJs": true,>>tsconfig.json
	echo.    "skipLibCheck": true,>>tsconfig.json
	echo.    "esModuleInterop": true,>>tsconfig.json
	echo.    "allowSyntheticDefaultImports": true,>>tsconfig.json
	echo.    "strict": true,>>tsconfig.json
	echo.    "forceConsistentCasingInFileNames": true,>>tsconfig.json
	echo.    "module": "esnext",>>tsconfig.json
	echo.    "moduleResolution": "node",>>tsconfig.json
	echo.    "resolveJsonModule": true,>>tsconfig.json
	echo.    "isolatedModules": true,>>tsconfig.json
	echo.    "noEmit": true,>>tsconfig.json
	echo.    "jsx": "preserve",>>tsconfig.json
	echo.    "noImplicitReturns": true,>>tsconfig.json
	echo.    "noImplicitThis": true,>>tsconfig.json
	echo.    "noImplicitAny": false,>>tsconfig.json
	echo.    "strictNullChecks": true,>>tsconfig.json
	echo.    "suppressImplicitAnyIndexErrors": true>>tsconfig.json
	echo.  },>>tsconfig.json
	echo.  "include": [>>tsconfig.json
	echo.    "src">>tsconfig.json
	echo.  ]>>tsconfig.json
	echo.}>>tsconfig.json
:: Store File
	echo.import { Store, createStore, compose, applyMiddleware } from 'redux'; >> src\Store.ts
	echo.import reduxThunk from 'redux-thunk'; >> src\Store.ts
	echo.import logger from 'redux-logger'; >> src\Store.ts
	echo.import { state } from './reducers'; >> src\Store.ts
	echo.>> src\Store.ts
	echo.const a: any = window; >> src\Store.ts
	echo.const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ^|^| compose; >> src\Store.ts
	echo.>> src\Store.ts
	echo.const enhancer = composeEnhancers( >> src\Store.ts
	echo.  applyMiddleware(reduxThunk, logger), >> src\Store.ts
	echo.  // other store enhancers if any >> src\Store.ts
	echo.); >> src\Store.ts
	echo.>> src\Store.ts
	echo.export const store: Store^<any^> = createStore( >> src\Store.ts
	echo.  state, >> src\Store.ts
	echo.  enhancer >> src\Store.ts
	echo.); >> src\Store.ts
:: Reducer Index File
	echo.import { combineReducers } from "redux";>> src\reducers\index.ts
	echo.// import { clickerReducer } from "./Clicker.reducer";>> src\reducers\index.ts
	echo.import { chuckNorrisReducer } from "./ChuckNorris.reducer";>> src\reducers\index.ts
	echo.// import { ticTacToeReducer } from "./TicTacToe.reducer";>> src\reducers\index.ts
	echo.>> src\reducers\index.ts
	echo.export interface IClickerState {>> src\reducers\index.ts
	echo.  clicks: number>> src\reducers\index.ts
	echo.}>> src\reducers\index.ts
	echo.>> src\reducers\index.ts
	echo.export interface IChuckNorrisState {>> src\reducers\index.ts
	echo.  joke: string>> src\reducers\index.ts
	echo.}>> src\reducers\index.ts
	echo.>> src\reducers\index.ts
	echo.export interface ITicTacToeState{>> src\reducers\index.ts
	echo.  game:[string[],string[],string[]],>> src\reducers\index.ts
	echo.  message:string,>> src\reducers\index.ts
	echo.  playerTurn:boolean,>> src\reducers\index.ts
	echo.  winner:number>> src\reducers\index.ts
	echo.}>> src\reducers\index.ts
	echo.>> src\reducers\index.ts
	echo.export interface IState {>> src\reducers\index.ts
	echo.  // clicker: IClickerState,>> src\reducers\index.ts
	echo.  chuckNorris: IChuckNorrisState>> src\reducers\index.ts
	echo.  // ticTacToe: ITicTacToeState>> src\reducers\index.ts
	echo.}>> src\reducers\index.ts
	echo.>> src\reducers\index.ts
	echo.export const state = combineReducers^<IState^>({>> src\reducers\index.ts
	echo.  // clicker: clickerReducer,>> src\reducers\index.ts
	echo.  chuckNorris: chuckNorrisReducer,>> src\reducers\index.ts
	echo.  // ticTacToe: ticTacToeReducer>> src\reducers\index.ts
	echo.})>> src\reducers\index.ts
:: Example Reducer File
	echo.import { IChuckNorrisState } from ".";>> src\reducers\ChuckNorris.reducer.ts
	echo.import { chuckNorrisTypes } from "../actions/chuck-norris/ChuckNorris.actions";>> src\reducers\ChuckNorris.reducer.ts
	echo.>> src\reducers\ChuckNorris.reducer.ts
	echo.const initialState: IChuckNorrisState = {>> src\reducers\ChuckNorris.reducer.ts
	echo.  joke: 'A snake bit chuck norris after 5 painful days the snake died',>> src\reducers\ChuckNorris.reducer.ts
	echo.  //disableBuyJoke: false>> src\reducers\ChuckNorris.reducer.ts
	echo.}>> src\reducers\ChuckNorris.reducer.ts
	echo.>> src\reducers\ChuckNorris.reducer.ts
	echo.export const chuckNorrisReducer = (state = initialState, action: any) =^> {>> src\reducers\ChuckNorris.reducer.ts
	echo.  switch (action.type) {>> src\reducers\ChuckNorris.reducer.ts
	echo.    case chuckNorrisTypes.BUY_JOKE:>> src\reducers\ChuckNorris.reducer.ts
	echo.      return {>> src\reducers\ChuckNorris.reducer.ts
	echo.        ...state,>> src\reducers\ChuckNorris.reducer.ts
	echo.        joke: action.payload.joke>> src\reducers\ChuckNorris.reducer.ts
	echo.      }>> src\reducers\ChuckNorris.reducer.ts
	echo.    case chuckNorrisTypes.TOGGLE_BUY_JOKE:>> src\reducers\ChuckNorris.reducer.ts
	echo.      return {>> src\reducers\ChuckNorris.reducer.ts
	echo.        ...state,>> src\reducers\ChuckNorris.reducer.ts
	echo.        disableBuyJoke: action.payload.isDisabled>> src\reducers\ChuckNorris.reducer.ts
	echo.      }>> src\reducers\ChuckNorris.reducer.ts
	echo.  }>> src\reducers\ChuckNorris.reducer.ts
	echo.  return state;>> src\reducers\ChuckNorris.reducer.ts
	echo.}>> src\reducers\ChuckNorris.reducer.ts
:: Example Action File
	echo.export const chuckNorrisTypes = {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.  BUY_JOKE: 'CHUCK_NORRIS_BUY_JOKE',>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.  TOGGLE_BUY_JOKE: 'CHUCK_NORRIS_TOGGLE_BUY_JOKE'>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.}>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.export const buyJoke = () =^> async (dispatch) =^> {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.  try {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    dispatch({>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      payload: {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.        isDisabled: true>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      },>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      type: chuckNorrisTypes.TOGGLE_BUY_JOKE>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    })>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    const body = await resp.json();>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    const joke = body.value.joke;>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    dispatch({>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      payload: {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.        joke>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      },>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      type: chuckNorrisTypes.BUY_JOKE>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    })>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.  } catch (err) {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    console.log(err);>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.  } finally {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    dispatch({>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      payload: {>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.        isDisabled: false>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      },>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.      type: chuckNorrisTypes.TOGGLE_BUY_JOKE>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.    })>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.  }>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.>> src\actions\chuck-norris\ChuckNorris.actions.ts
	echo.}>> src\actions\chuck-norris\ChuckNorris.actions.ts
:: Container file
	echo.import { connect } from "react-redux";>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.import { ChuckNorrisComponent } from "./ChuckNorris.component";>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.import { IState } from "../../reducers";>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.import { buyJoke } from "../../actions/chuck-norris/ChuckNorris.actions";>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.const mapStateToProps = (state: IState) =^> {>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.  return {>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.    // clicks: state.clicker.clicks,>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.    chuckNorris: state.chuckNorris>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.  }>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.}>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.const mapDispatchToProps = {>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.  buyJoke,>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.}>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.>> src\components\chuck-norris\ChuckNorris.container.ts
	echo.export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisComponent);>> src\components\chuck-norris\ChuckNorris.container.ts
:: Example Component File
	echo.import React from 'react';>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.import { IChuckNorrisState } from '../../reducers';>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.interface IChuckNorrisProps {>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.  clicks: number,>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.  chuckNorris: IChuckNorrisState,>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.  buyJoke: () =^> void>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.}>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.export class ChuckNorrisComponent extends React.Component^<IChuckNorrisProps, any^> {>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.  render() {>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.    return (>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.      ^<div^>>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.        ^<div^>>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.          Joke: {this.props.chuckNorris.joke}>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.        ^</div^>>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.        {>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.          this.props.clicks ^>= 1000 ^&^& >> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.            ^<button className="btn btn-primary" >> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.              onClick={() =^> this.props.buyJoke}>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.            ^>>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.                Buy Joke>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.            ^</button^>>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.        }>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.      ^</div^>>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.    ^)>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.  }>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.>> src\components\chuck-norris\ChuckNorris.component.tsx
	echo.}>> src\components\chuck-norris\ChuckNorris.component.tsx
:: change CSS to SCSS (Breaks project)
	:: cd src
	:: rename App.css App.scss
	:: cd ..
:: Tests Setup File
	echo.import { configure } from 'enzyme';>> src\setupTests.tsx
	echo.import Adapter from 'enzyme-adapter-react-16';>> src\setupTests.tsx
	echo.>> src\setupTests.tsx
	echo.configure({adapter: new Adapter()});>> src\setupTests.tsx
cd ..