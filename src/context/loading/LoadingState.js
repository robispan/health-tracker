import React, { useReducer } from 'react';
import LoadingReducer from './loadingReducer';
import LoadingContext from './loadingContext';
import { SET_LOADING, STOP_LOADING } from '../types';

const LoadingState = props => {
  const initialState = {
    loading: false
  };

  const [state, dispatch] = useReducer(LoadingReducer, initialState);

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Stop loading
  const stopLoading = () => dispatch({ type: STOP_LOADING });

  return (
    <LoadingContext.Provider
      value={{
        loading: state.loading,
        setLoading,
        stopLoading
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingState;
