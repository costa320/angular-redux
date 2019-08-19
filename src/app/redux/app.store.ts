import { InjectionToken } from "@angular/core";
import {
  createStore,
  Store,
  compose,
  StoreEnhancer,
  combineReducers,
  applyMiddleware
} from "redux";

/* REDUCERS */
import { counterReducer } from "./counter/counter.reducer";

// Logger with default options
import logger from "redux-logger";

export const AppStore = new InjectionToken("App.store");

const rootReducer = combineReducers({
  counter: counterReducer
});

/* merged APPSTATE between all reducers */
export type AppState = ReturnType<typeof rootReducer>;

/* DEVTOOLS to be used with chrome extension app Redux */
const devtools: StoreEnhancer<AppState> = window["__REDUX_DEVTOOLS_EXTENSION__"]
  ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
  : f => f;

/* CREATION OF STORE */
export function createAppStore(): Store<AppState> {
  return createStore<AppState, any, any, any>(
    rootReducer,
    compose(devtools)
    /*   applyMiddleware(logger) */
  );
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
