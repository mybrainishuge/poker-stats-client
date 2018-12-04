import { UPDATE } from '../action/type';

export const countries = (state = null, action) => {
  switch (action.type) {
    case UPDATE.COUNTRIES:
      return action.value;
    default:
      return state;
  }
};
