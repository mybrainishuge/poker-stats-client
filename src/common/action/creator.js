import axios from 'axios';
import { ADD, CLEAR, UPDATE } from './type';

const updateCountries = value => ({ type: UPDATE.COUNTRIES, value });
const updatePlayers = value => ({ type: UPDATE.PLAYERS, value });

export const getCountries = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3333/countries');
  dispatch(updateCountries(data));
};

export const getPlayers = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3333/players');
  dispatch(updatePlayers(data));
};

export const addPlayer = player => async dispatch => {
  const { data } = await axios.post('http://localhost:3333/add', player);
  dispatch(updatePlayers(data));
  // dispatch success message
};

export const clearAddPlayer = () => dispatch => dispatch({ type: CLEAR.ADD_PLAYER });

export const updatePlayer = (id, value) => async dispatch => {
  console.log('id:', id, 'value:', value);
  const { data } = await axios.patch('http://localhost:3333/update', { id, value });
  dispatch(updatePlayers(data));
  // dispatch success message
};

export const enableAddPlayer = () => dispatch => dispatch({ type: ADD.PLAYER });

export const clearPlayer = () => dispatch => dispatch({ type: CLEAR.PLAYER });

export const setPlayer = player => dispatch => dispatch({ type: UPDATE.PLAYER, value: player });
