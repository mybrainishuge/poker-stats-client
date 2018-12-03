import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer/rootReducer';

export const configureStore = (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));
