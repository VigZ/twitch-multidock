import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import App from './App';
import followingBarReducer from './reducers/followingBarReducer';
import streamsReducer from './reducers/streamsReducer';


import './App.css';

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ followingBarReducer, streamsReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App className='app-container'/></Provider>, document.getElementById('root'));
registerServiceWorker();
