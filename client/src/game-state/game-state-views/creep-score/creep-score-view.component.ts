import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateCreepScore, viewNullDecoratorProperty } from "../../../ngrx";
import { CreepScoreView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'creep-score-view',
	templateUrl: 'creep-score-view.component.html'
})
export class CreepScoreViewComponent extends GameStateViewBase<CreepScoreView> {
	@viewNullDecoratorProperty()
	public get lastHits(): number {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get denies(): number {
		return 0;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateCreepScore);
	}
}

export const ViewCreepScore: GameStateView = {
	id: 'VIEW_CREEP_SCORE',
	label: 'Creep score',
	icon: 'assessment',
	description: 'Shows your current creep score.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: CreepScoreViewComponent,
	viewSettings: [
		{
			id: "VIEW_CREEP_SCORE_SHOW_KILLS",
			label: "Show number of killed creeps",
			defaultValue: true
		},
		{
			id: "VIEW_CREEP_SCORE_SHOW_DENIES",
			label: "Show number of denied creeps",
			defaultValue: true
		}
	]
};
