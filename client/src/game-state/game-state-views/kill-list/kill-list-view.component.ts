import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateKillList } from "../../../ngrx";
import { KillListView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'kill-list-view',
	templateUrl: 'kill-list-view.component.html'
})
export class KillListViewComponent extends GameStateViewBase<KillListView> {
	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateKillList);
	}

	public getKill(index: number) {
		return `Kill #${index + 1}`;
	}
}

export const ViewKillList: GameStateView = {
	id: 'VIEW_KILL_LIST',
	label: 'Kill list',
	icon: "format_list_numbered",
	description: 'Shows the last 4 kills you contributed to.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: KillListViewComponent,
	viewSettings: []
};
