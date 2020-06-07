import { INITIAL_STATE } from "../state";
import { adminMode } from "../actions";

const tickets = (state = INITIAL_STATE, action) => {
  const { isAdmin } = action;
  switch (action.type) {
    case adminMode:
      return { ...state, isAdmin };
    default:
      return state;
  }
};

export { tickets };
