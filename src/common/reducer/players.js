import { UPDATE_PLAYERS } from '../action/type';

export const players = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return action.value;
    default:
      return state;
  }
};
