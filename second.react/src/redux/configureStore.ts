
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'

const createStore = () =>
configureStore({
  reducer : rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default createStore;
// export default function configureStore111(initialState:any):Store<AppState> {
//   const composeEnhancers =
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

//   return createStore(
//     rootReducer,
//     initialState,
//    composeEnhancers(applyMiddleware()));
// }