import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Use local storage.
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';

// Persist Configurations.
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer, // handle by Firebase.
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);