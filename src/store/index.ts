import { configureStore, createImmutableStateInvariantMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import { clienteApi } from "./cliente/apiSlice";
import { clienteSlice } from "./cliente/clientSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ["clientes"],
});
export const store = configureStore({
  reducer: {
    cliente: clienteSlice.reducer,
    [clienteApi.reducerPath]: clienteApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clienteApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
