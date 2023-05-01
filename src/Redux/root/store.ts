import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {clientApi} from '../domain/cliente/client-api';
import {clientSlice} from '../domain/cliente/client-slice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {authApi} from '../domain/auth/auth-api';
import {authSlice} from '../domain/auth/auth-slice';
import {productApi} from "../domain/product/product-api";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api','client']

};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    client: clientSlice.reducer,
    auth: authSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store, persistor};
