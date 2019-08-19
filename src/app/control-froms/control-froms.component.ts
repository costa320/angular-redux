import { Component, Inject } from "@angular/core";
/* REDUX */
import { Store } from "redux";
import { AppStore } from "../redux/app.store";
import { AppState } from "../redux/app.state";
import * as CounterActions from "../redux/counter/counter.actions"; /* CounterActions.increment(); CounterActions.decrement() */

@Component({
  selector: "app-control-froms",
  templateUrl: "./control-froms.component.html",
  styleUrls: ["./control-froms.component.scss"]
})
export class ControlFromsComponent {
  constructor(@Inject(AppStore) private store: Store<AppState>) {}

  increment() {
    /* increment by +1 */
    this.store.dispatch(CounterActions.IncrementCounter(1));
  }

  decrement() {
    /* decrement by -1 */
    this.store.dispatch(CounterActions.DecrementCounter(1));
  }
}
