import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateKDA, viewNullDecoratorProperty } from "../../../ngrx";
import { KDAView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'kda-view',
	templateUrl: 'kda-view.component.html'
})
export class KDAViewComponent extends GameStateViewBase<KDAView> {
	private _kda: string = null;
	public get kda(): string {
		return this._kda;
	}

	@viewNullDecoratorProperty()
	public get kills(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get deaths(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get assists(): number {
		return 0;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateKDA);
	}
}

export const ViewKDA: GameStateView = {
	id: 'VIEW_KDA',
	label: 'KDA',
	icon: 'whatshot',
	description: 'Shows your current KDA.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: KDAViewComponent,
	viewSettings: [
		{
			id: "VIEW_KDA_SHOW_KD",
			label: "Show kill/death ratio instead of kill+assist/death ratio",
			defaultValue: false
		},
		{
			id: "VIEW_SHOW_KDA_AS_SMILEY",
			label: "Shows a happy face when >1.0 and a sad face when <1.0",
			defaultValue: false
		}
	]
};
