import {
  INCREMENT,
  DECREMENT,
  CounterActionTypes,
  CounterState
} from "./counter.types";

const initialState: CounterState = {
  currentValue: 0
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return {
        currentValue: state.currentValue + action.payload
      };
    case DECREMENT:
      return {
        currentValue: state.currentValue - action.payload
      };
    default:
      return state;
  }
}
