import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateWard, viewNullDecoratorProperty } from "../../../ngrx";
import { WardView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'ward-view',
	templateUrl: 'ward-view.component.html'
})
export class WardViewComponent extends GameStateViewBase<WardView> {
	@viewNullDecoratorProperty()
	public get available() {
		return false;
	}

	@viewNullDecoratorProperty('cooldownVisual')
	public get cooldown() {
		return "0:00";
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateWard);
	}
}

export const ViewWard: GameStateView = {
	id: 'VIEW_WARD',
	label: 'Ward availability',
	icon: "remove_red_eye",
	description: 'Shows if you can buy an observer ward.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: WardViewComponent,
	viewSettings: [
		{
			id: "VIEW_WARD_PLAY_SOUND_WHEN_READY",
			label: "Play a sound when there's a ward available",
			defaultValue: true
		}
	]
};
