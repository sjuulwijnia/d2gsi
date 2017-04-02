import { NgModule } from "@angular/core";
import { CoreModule } from "../core";

import { GameStateService } from "./game-state.service";
import { GameStateViewContainerComponent } from "./game-state-view-container.component";
import { GameStateViewContainerItemComponent } from "./game-state-view-container-item.component";

import { VIEWS } from "./game-state.views";
import { InventoryViewItemComponent } from "./game-state-views/inventory/inventory-view-item.component";

const VIEW_COMPONENTS = VIEWS.map(view => view.viewComponent);

@NgModule({
	imports: [
		CoreModule
	],

	declarations: [
		GameStateViewContainerComponent,
		GameStateViewContainerItemComponent,

		...VIEW_COMPONENTS,
		InventoryViewItemComponent
	],

	entryComponents: [
		...VIEW_COMPONENTS
	],

	providers: [
		GameStateService
	],

	exports: [
		GameStateViewContainerComponent
	]
})
export class GameStateModule { }
