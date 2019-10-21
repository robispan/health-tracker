import { CLEAR_STRAVA_DATA, GET_STRAVA_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_STRAVA_DATA:
      return {
        ...state,
        stravaData: action.payload
      };
    case CLEAR_STRAVA_DATA:
      return {
        ...state,
        stravaData: null
      };
    default:
      return state;
  }
};
