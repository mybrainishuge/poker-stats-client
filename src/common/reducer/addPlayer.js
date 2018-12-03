import { ADD, CLEAR } from '../action/type';

export const addPlayer = (state = false, action) => {
  switch (action.type) {
    case CLEAR.ADD_PLAYER:
      return false;
    case ADD.PLAYER:
      return true;
    default:
      return state;
  }
};
