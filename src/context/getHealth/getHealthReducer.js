import {
	SET_RUNKEEPER_DATA,
	CLEAR_RUNKEEPER_DATA,
	SET_WITHINGS_DATA,
	CLEAR_WITHINGS_DATA,
	SET_MAPMYFITNESS_DATA,
	CLEAR_MAPMYFITNESS_DATA
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_RUNKEEPER_DATA:
			return {
				...state,
				runkeeperData: action.payload
			};
		case CLEAR_RUNKEEPER_DATA:
			return {
				...state,
				runkeeperData: null
			};
		case SET_WITHINGS_DATA:
			return {
				...state,
				withingsData: action.payload
			};
		case CLEAR_WITHINGS_DATA:
			return {
				...state,
				withingsData: null
			};
		case SET_MAPMYFITNESS_DATA:
			return {
				...state,
				mapmyfitnessData: action.payload
			};
		case CLEAR_MAPMYFITNESS_DATA:
			return {
				...state,
				mapmyfitnessData: null
			};
		default:
			return state;
	}
};
