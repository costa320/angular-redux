import { Component, Inject } from "@angular/core";
/* REDUX */
import { Store } from "redux";
import { AppStore } from "../redux/app.store";
import { AppState } from "../redux/app.state";

@Component({
  selector: "app-visual-element",
  templateUrl: "./visual-element.component.html",
  styleUrls: ["./visual-element.component.scss"]
})
export class VisualElementComponent {
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }
}
