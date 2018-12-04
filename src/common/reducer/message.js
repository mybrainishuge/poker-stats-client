import { CLEAR, UPDATE } from '../action/type';

export const message = (state = '', action) => {
  switch (action.type) {
    case CLEAR.MESSAGE:
      return '';
    case UPDATE.MESSAGE:
      return action.value;
    default:
      return state;
  }
};
