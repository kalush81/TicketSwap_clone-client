import { createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(ReduxThunk));

const store = createStore(reducer, enhancer)

export default store

