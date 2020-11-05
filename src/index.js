import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// redux-logger
import logger from 'redux-logger';
// redux-saga
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
// axios
import axios from 'axios';

function* sagaWatcher(){
  yield takeEvery('FETCH_GIF', fetchGif)
}

const sagaMiddleware = createSagaMiddleware();

const giphyReducer = (state=null, action) => {
    console.log('in giphyReducer', state);
    switch (action.type) {
        case 'SET_GIF':
            return action.payload;
        default:
            return state;
    }
}

// fetch the GIF API of a given string payload
function* fetchGif(action){
  yield console.log('in fetchGif', action.payload)
  try{
      const searchResponse = yield axios.post('/api/search', action.payload);
      yield put({ type: 'SET_GIF', payload: searchResponse.data});
  }
  catch (error) {
      console.log('ERROR in fetchGif', error);
  }
  // axios GET request
}

const store = createStore(
    combineReducers({
        giphyReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
sagaMiddleware.run(sagaWatcher);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
