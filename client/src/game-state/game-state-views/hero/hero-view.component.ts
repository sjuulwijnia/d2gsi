import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

import { AppState, Store, getGameStateHero, viewNullDecoratorProperty } from "../../../ngrx";
import { HeroView } from "../../../ngrx/game-state/models";

@Component({
	selector: 'hero-view',
	templateUrl: 'hero-view.component.html'
})
export class HeroViewComponent extends GameStateViewBase<HeroView> {
	@viewNullDecoratorProperty()
	public get name() {
		return '-';
	}

	@viewNullDecoratorProperty()
	public get nameVisual() {
		return '-';
	}

	@viewNullDecoratorProperty()
	public get level() {
		return 0;
	}

	@viewNullDecoratorProperty()
	public get healthCurrent() {
		return 50;
	}

	@viewNullDecoratorProperty()
	public get healthPercentage() {
		return 50;
	}

	@viewNullDecoratorProperty()
	public get healthTotal() {
		return 100;
	}


	@viewNullDecoratorProperty()
	public get manaCurrent() {
		return 50;
	}

	@viewNullDecoratorProperty()
	public get manaPercentage() {
		return 50;
	}

	@viewNullDecoratorProperty()
	public get manaTotal() {
		return 100;
	}

	constructor(
		store: Store<AppState>
	) {
		super(store, getGameStateHero);
	}
}

export const ViewHero: GameStateView = {
	id: 'VIEW_HERO',
	label: 'Hero',
	icon: 'account_circle',
	description: 'Shows your hero information: level, health and mana.',

	columnSize: 2,
	rowSize: 1,

	viewComponent: HeroViewComponent,
	viewSettings: []
};
