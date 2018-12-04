import axios from 'axios';
import { ADD, CLEAR, UPDATE } from './type';

const updateCountries = value => ({ type: UPDATE.COUNTRIES, value });

export const clearAddPlayer = () => dispatch => dispatch({ type: CLEAR.ADD_PLAYER });
export const clearPlayer = () => dispatch => dispatch({ type: CLEAR.PLAYER });
export const enableAddPlayer = () => dispatch => dispatch({ type: ADD.PLAYER });
export const setPlayer = value => dispatch => dispatch({ type: UPDATE.PLAYER, value });

const updatePlayers = (dispatch, value) => {
  dispatch({ type: UPDATE.PLAYERS, value });
  dispatch({ type: CLEAR.ADD_PLAYER });
  dispatch({ type: CLEAR.PLAYER });
  dispatch({ type: UPDATE.MESSAGE, value: 'Success!' });
  setTimeout(() => dispatch({ type: CLEAR.MESSAGE }), 5000);
};

export const getCountries = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3333/countries');
  dispatch(updateCountries(data));
};

export const getPlayers = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3333/players');
  dispatch({ type: UPDATE.PLAYERS, value: data });
};

export const addPlayer = player => async dispatch => {
  const { data } = await axios.post('http://localhost:3333/add', player);
  updatePlayers(dispatch, data);
};

export const updatePlayer = (id, value) => async dispatch => {
  const { data } = await axios.patch('http://localhost:3333/update', { id, value });
  updatePlayers(dispatch, data);
};
