import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { MAP_GAME_STATE_IN_PROGRESS } from "../../../dota2/gamestate/gamestate-map";
import { AppState, Store, getGameStateMatchStatistics, viewNullDecoratorProperty } from "../../../ngrx";
import { MatchStatisticsView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'match-statistics-view',
	templateUrl: 'match-statistics-view.component.html'
})
export class MatchStatisticsViewComponent extends GameStateViewBase<MatchStatisticsView> {
	@viewNullDecoratorProperty()
	public get matchId(): string {
		return '-';
	}

	@viewNullDecoratorProperty()
	public get time(): string {
		return '-';
	}

	@viewNullDecoratorProperty('gameStateVisual')
	public get gameState(): string {
		return '-';
	}

	public get inProgress(): boolean {
		if (!this.gameStateView) {
			return false;
		}

		return this.gameStateView.gameStateVisual === MAP_GAME_STATE_IN_PROGRESS;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateMatchStatistics);
	}
}

export const ViewMatchStatistics: GameStateView = {
	id: 'VIEW_MATCH_STATISTICS',
	label: 'Match',
	icon: "format_list_bulleted",
	description: 'Shows some statistics of your current match.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: MatchStatisticsViewComponent,
	viewSettings: []
};
