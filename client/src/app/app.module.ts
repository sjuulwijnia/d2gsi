import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "../core";

// MODULES
import { AppStoreModule } from "../ngrx";
import { GameStateModule } from "../game-state";

// COMPONENTS
import { AppComponent } from "./app.component";

@NgModule({
	imports: [
		BrowserModule,
		CoreModule,

		AppStoreModule,
		GameStateModule
	],

	declarations: [
		AppComponent
	],

	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
