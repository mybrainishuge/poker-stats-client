import axios from 'axios';
import { UPDATE_PLAYERS } from './type';

const updatePlayers = value => ({ type: UPDATE_PLAYERS, value });

export const getPlayers = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3333/players');
  dispatch(updatePlayers(data));
};
