import { CLEAR, UPDATE } from '../action/type';

export const player = (state = null, action) => {
  switch (action.type) {
    case CLEAR.PLAYER:
      return null;
    case UPDATE.PLAYER:
      return action.value;
    default:
      return state;
  }
};
