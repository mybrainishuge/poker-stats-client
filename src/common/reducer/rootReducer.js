import { combineReducers } from 'redux';
import { players } from '../reducer/players.js';

export const rootReducer = combineReducers({ players });
