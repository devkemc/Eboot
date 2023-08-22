import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {clientApi} from '../domain/cliente/client-api';
import {clientSlice} from '../domain/cliente/client-slice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {authApi} from '../domain/auth/auth-api';
import {authSlice} from '../domain/auth/auth-slice';
import {productApi} from "../domain/product/product-api";
import {shoppingCartApi} from "../domain/carrinho/shopping-cart-api";
import {enderecoApi} from "../domain/cliente/endereco-api";
import {carSlice} from "../domain/carrinho/car-slice";
import {cardSlice} from "../domain/card/card-slice";
import {cardApi} from "../domain/card/card-api";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api', 'client']

};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    client: clientSlice.reducer,
    auth: authSlice.reducer,
    car: carSlice.reducer,
    card: cardSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
    [enderecoApi.reducerPath]: enderecoApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
    [authApi.reducerPath]: authApi.reducer,

  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(authApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store, persistor};
