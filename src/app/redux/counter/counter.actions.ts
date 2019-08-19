import { INCREMENT, DECREMENT, CounterActionTypes } from "./counter.types";

// TypeScript infers that this function is returning SendMessageAction
export function IncrementCounter(value): CounterActionTypes {
  return {
    type: INCREMENT,
    payload: value
  };
}

export function DecrementCounter(value): CounterActionTypes {
  return {
    type: DECREMENT,
    payload: value
  };
}
