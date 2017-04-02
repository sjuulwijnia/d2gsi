import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStatePosition, viewNullDecoratorProperty } from "../../../ngrx";
import { PositionView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'position-view',
	templateUrl: 'position-view.component.html'
})
export class PositionViewComponent extends GameStateViewBase<PositionView> {
	@viewNullDecoratorProperty()
	public get heroName() {
		return '';
	}

	@viewNullDecoratorProperty()
	public get mapNameVisual() {
		return '';
	}

	@viewNullDecoratorProperty()
	public get positionX() {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get positionY() {
		return 0;
	}

	public get leftPercentage() {
		if (!this.gameStateView) {
			return 50;
		}

		return (this.gameStateView.positionX + 7500) / 150;
	}

	public get topPercentage() {
		if (!this.gameStateView) {
			return 50;
		}

		return (100 - (this.gameStateView.positionY + 7500) / 150);
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStatePosition);
	}
}

export const ViewPosition: GameStateView = {
	id: 'VIEW_POSITION',
	label: 'Position',
	icon: "landscape",
	description: 'Shows your current position on the minimap.',

	columnSize: 1,
	rowSize: 2,

	viewComponent: PositionViewComponent,
	viewSettings: []
};
