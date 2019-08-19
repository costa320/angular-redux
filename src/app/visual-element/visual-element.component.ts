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
  counter = 0;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
  }

  readState() {
    const State = this.store.getState();
    this.counter = State.counter.currentValuen;
  }
}
