export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface Increment {
  type: typeof INCREMENT;
  payload: number;
}

interface Decrement {
  type: typeof DECREMENT;
  payload: number;
}

export interface CounterState {
  currentValue: number;
}

export type CounterActionTypes = Increment | Decrement;
