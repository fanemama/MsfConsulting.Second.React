
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'

const createStore = () =>
configureStore({
  reducer : rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default createStore;