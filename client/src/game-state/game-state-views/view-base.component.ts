import { OnDestroy } from "@angular/core";

import { Store, AppState, Subscription } from "../../ngrx";
import { GameStateView } from "../../ngrx/view";

export abstract class GameStateViewBase<T> implements OnDestroy {
	configuration: GameStateView;

	protected gameStateView: T;
	private gameStateViewSubscription: Subscription;

	constructor(store: Store<AppState>, selector: (state: AppState) => T) {
		if (!!store && !!selector) {
			this.gameStateViewSubscription = store
				.select(selector)
				.subscribe(gameStateView => {
					this.gameStateView = gameStateView;
				});
		}
	}

	ngOnDestroy() {
		if (!!this.gameStateViewSubscription) {
			this.gameStateViewSubscription.unsubscribe();
		}
	};

	public get hasGameState() {
		return !!this.gameStateView;
	}
}

export { GameStateView } from "../../ngrx/view";
