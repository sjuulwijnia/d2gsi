import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateXPM, viewNullDecoratorProperty } from "../../../ngrx";
import { AverageView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'xpm-view',
	templateUrl: 'xpm-view.component.html'
})
export class XPMViewComponent extends GameStateViewBase<AverageView<number>> {
	@viewNullDecoratorProperty('current')
	public get currentXPM(): number {
		return 0;
	}

	public get averageXPM(): number {
		if (!this.gameStateView) {
			return 0;
		}

		if (this.configuration.viewSettings[1].defaultValue) {
			return this.gameStateView.averageHero;
		}

		return this.gameStateView.average;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateXPM);
	}
}

export const ViewXPM: GameStateView = {
	id: 'VIEW_XPM',
	label: 'Experience per minute',
	icon: "supervisor_account",
	description: 'Shows your current XPM.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: XPMViewComponent,
	viewSettings: [
		{
			id: "VIEW_XPM_COMPARE_AVERAGE",
			label: "Compare to average",
			defaultValue: false,
			disabled: true
		},
		{
			id: "VIEW_XPM_COMPARE_AVERAGE_HERO_ONLY",
			label: "Only compare to the same hero",
			defaultValue: true,
			disabled: true
		}
	]
};
