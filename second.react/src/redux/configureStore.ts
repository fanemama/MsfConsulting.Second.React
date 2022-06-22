
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

const createStore = () =>
configureStore({
  reducer : rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default createStore;