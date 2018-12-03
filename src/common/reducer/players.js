import { UPDATE } from '../action/type';

export const players = (state = [], action) => {
  switch (action.type) {
    case UPDATE.PLAYERS:
      return action.value;
    default:
      return state;
  }
};
