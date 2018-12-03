import { combineReducers } from 'redux';
import { addPlayer } from './addPlayer.js';
import { player } from './player.js';
import { players } from './players.js';

export const rootReducer = combineReducers({ addPlayer, player, players });
