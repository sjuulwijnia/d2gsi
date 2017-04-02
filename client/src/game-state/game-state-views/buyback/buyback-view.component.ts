import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateBuyback, viewNullDecoratorProperty } from "../../../ngrx";
import { BuybackView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'buyback-view',
	templateUrl: 'buyback-view.component.html'
})
export class BuybackViewComponent extends GameStateViewBase<BuybackView> {
	@viewNullDecoratorProperty()
	public get available() {
		return false;
	}

	@viewNullDecoratorProperty()
	public get buybackCost(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get deathCost(): number {
		return 0;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateBuyback);
	}
}

export const ViewBuyback: GameStateView = {
	id: 'VIEW_BUYBACK',
	label: 'Buyback status',
	icon: "exit_to_app",
	description: 'Shows your buyback status.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: BuybackViewComponent,
	viewSettings: [

	]
};
