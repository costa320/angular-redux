import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/* REDUX */
import { appStoreProviders } from "./redux/app.store";
import { ControlFromsComponent } from "./control-froms/control-froms.component";
import { VisualElementComponent } from "./visual-element/visual-element.component";

@NgModule({
  declarations: [AppComponent, ControlFromsComponent, VisualElementComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
