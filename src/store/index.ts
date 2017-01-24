import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { counterReducer } from './counter.reducer';

export class IAppState {
  counter?: number; 
};

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
});

export const enhancers = [
  persistState('counter', { key: 'ng2-redux/examples/counter' })
];
