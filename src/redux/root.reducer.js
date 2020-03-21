import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Use local storage.
import storage from 'redux-persist/lib/storage';

// reducers. 
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// Persist Configurations.
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer, // handle by Firebase.
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);