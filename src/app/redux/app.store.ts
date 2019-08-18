import { InjectionToken } from "@angular/core";
import {
  createStore,
  Store,
  compose,
  StoreEnhancer,
  applyMiddleware
} from "redux";

import { AppState } from "./app.state";
import { counterReducer as reducer } from "./reducers/counter.reducer";

// Logger with default options
import logger from "redux-logger";

export const AppStore = new InjectionToken("App.store");

const devtools: StoreEnhancer<AppState> = window["__REDUX_DEVTOOLS_EXTENSION__"]
  ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
  : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState, any, any, any>(
    reducer,
    compose(devtools)
    /*   applyMiddleware(logger) */
  );
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
