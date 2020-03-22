import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// Persist.
import { persistStore } from 'redux-persist';
// Thunk. 
// We don't need Thunk anymore
//import thunk from 'redux-thunk';
// Saga.
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root.reducer';

// Create saga middleware.
const sagaMiddleWare = createSagaMiddleware();
// Put saga middleware into middlewares list.
const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(
    rootReducer, applyMiddleware(...middlewares)
    );

sagaMiddleWare.run(
    fetchCollectionsStart
);

const persistor = persistStore(store);

export {store, persistor};