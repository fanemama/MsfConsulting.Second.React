import { AppState } from './appState';
import { createStore, compose, applyMiddleware, Store } from "redux";
import rootReducer from "./reducers";

export default function configureStore(initialState:any):Store<AppState> {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
   composeEnhancers(applyMiddleware()));
}