import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateItems } from "../../../ngrx";
import { GameStateItems, GameStateItem } from "../../../dota2";

@Component({
	selector: 'inventory-view',
	templateUrl: 'inventory-view.component.html'
})
export class InventoryViewComponent extends GameStateViewBase<GameStateItems> {
	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateItems);
	}

	ngOnInit() { }
	ngOnDestroy() { }

	public getItem(type: 'inventory' | 'backpack' | 'stash', index: number): GameStateItem {
		if (this.gameStateView && this.gameStateView.hasGameState) {
			return this.gameStateView[type][index];
		}

		return null;
	}
}

export const ViewInventory: GameStateView = {
	id: 'VIEW_INVENTORY',
	label: 'Inventory',
	icon: 'view_module',
	description: 'Shows your hero\'s inventory.',

	columnSize: 1,
	rowSize: 3,

	viewComponent: InventoryViewComponent,
	viewSettings: [

	]
};
