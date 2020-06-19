import { INITIAL_STATE } from "../state";
import { adminMode, nowLoading } from "../actions";

const tickets = (state = INITIAL_STATE, action) => {
  const { isAdmin, isLoading } = action;
  switch (action.type) {
    case adminMode:
      return { ...state, isAdmin };
    case nowLoading:
      return { ...state, isLoading };
    default:
      return state;
  }
};

export { tickets };
