import { CLEAR_STRAVA_DATA, GET_STRAVA_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_STRAVA_DATA:
      return {
        ...state,
        stravaData: action.payload,
        loading: false
      };
    case CLEAR_STRAVA_DATA:
      return {
        ...state,
        stravaData: null,
        loading: false
      };
    default:
      return state;
  }
};
