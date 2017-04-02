import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateGold, viewNullDecoratorProperty } from "../../../ngrx";
import { GoldView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'gold-view',
	templateUrl: 'gold-view.component.html'
})
export class GoldViewComponent extends GameStateViewBase<GoldView> {
	@viewNullDecoratorProperty()
	public get total(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get reliable(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get unreliable(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get gpm(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get networth(): number {
		return 0;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateGold);
	}
}

export const ViewGold: GameStateView = {
	id: 'VIEW_GOLD',
	label: 'Gold',
	icon: 'attach_money',
	description: 'Shows the amount of gold you have.',

	columnSize: 2,
	rowSize: 1,

	viewComponent: GoldViewComponent,
	viewSettings: []
};
