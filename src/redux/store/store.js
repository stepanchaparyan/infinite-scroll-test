import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { imagesReducer } from '../reducers/imagesReducer';

const middleware = [thunk];

const reducer = combineReducers({
  categories: categoriesReducer,
  images: imagesReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;