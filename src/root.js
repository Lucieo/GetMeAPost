import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

//default value is provided for initial state as it is only used in test of commentlist component
export default ({children, initialState={}})=>{
  const store = createStore(
    reducers,
    initialState, applyMiddleware(reduxPromise)
  );
  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}
