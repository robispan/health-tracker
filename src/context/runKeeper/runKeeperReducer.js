import { GET_RUNKEEPER_DATA, CLEAR_RUNKEEPER_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_RUNKEEPER_DATA:
      return {
        ...state,
        runKeeperData: action.payload
      };
    case CLEAR_RUNKEEPER_DATA:
      return {
        ...state,
        runKeeperData: null
      };
    default:
      return state;
  }
};
