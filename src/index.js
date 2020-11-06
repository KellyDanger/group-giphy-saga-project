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
  yield takeEvery('FETCH_GIF', fetchGif);
  yield takeEvery('ADD_FAVORITE', addFavorite);
  yield takeEvery('FETCH_FAV', fetchFav);
  yield takeEvery('SET_CATEGORY', addCategory);
}

function* addCategory(action) {
    try {
        yield console.log('payload is:', action.payload)
        yield axios.put(`/api/favorite/${action.payload.value}`, action.payload)
    }
    catch (error) {
        console.log('ERROR in update category', error);
    }
}

function* addFavorite(action) {
    try {
        yield axios.post('/api/favorite', action.payload);
    }catch (error) {
        console.log('Error in post', error);
    }
}

function* fetchFav() {
    try {
        const fetchFavResponse = yield axios.get('/api/favorite');
        yield put({type: 'SET_FAV', payload: fetchFavResponse.data})
    } catch (error) {
        console.log('ERROR IN FETCH GET', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

const favoriteReducer = (state=[], action) => {
    console.log('in favoriteReducer', state);
    switch (action.type) {
        case 'SET_FAV':
            return action.payload;
        default:
            return state;
    }
}

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
        giphyReducer,
        favoriteReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
sagaMiddleware.run(sagaWatcher);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
