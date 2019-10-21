import {
  CLEAR_STRAVA_DATA,
  GET_STRAVA_DATA,
  SET_LOADING,
  STOP_LOADING
} from '../types';

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
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
