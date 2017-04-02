import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateGPM, viewNullDecoratorProperty } from "../../../ngrx";
import { AverageView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'gpm-view',
	templateUrl: 'gpm-view.component.html'
})
export class GPMViewComponent extends GameStateViewBase<AverageView<number>> {
	@viewNullDecoratorProperty('current')
	public get currentGPM(): number {
		return 0;
	}

	public get averageGPM(): number {
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
		super(store, getGameStateGPM);
	}
}

export const ViewGPM: GameStateView = {
	id: 'VIEW_GPM',
	label: 'Gold per minute',
	icon: 'attach_money',
	description: 'Shows your current GPM.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: GPMViewComponent,
	viewSettings: [
		{
			id: "VIEW_GPM_COMPARE_AVERAGE",
			label: "Compare to average",
			defaultValue: false,
			disabled: true
		},
		{
			id: "VIEW_GPM_COMPARE_AVERAGE_HERO_ONLY",
			label: "Only compare to the same hero",
			defaultValue: true,
			disabled: true
		}
	]
};;
