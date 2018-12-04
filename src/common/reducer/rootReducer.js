import { combineReducers } from 'redux';
import { addPlayer } from './addPlayer.js';
import { countries } from './countries.js';
import { player } from './player.js';
import { players } from './players.js';

export const rootReducer = combineReducers({ addPlayer, countries, player, players });
