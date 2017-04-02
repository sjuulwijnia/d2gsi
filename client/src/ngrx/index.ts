import { createSelector } from "reselect";
import { combineReducers, Store, StoreModule } from "@ngrx/store";

import { GameState } from "../dota2";
import * as fromGameState from "./game-state";
import * as fromUI from "./ui";
import * as fromView from "./view";

export interface AppState {
	gameData: GameState
	ui: fromUI.UIState,
	view: fromView.ViewState
};

const reducers = {
	gameData: fromGameState.gameStateReducer,
	ui: fromUI.uiReducer,
	view: fromView.viewReducer
};

function appReducer(state: AppState, action: any) {
	return combineReducers(reducers)(state, action);
};

export const AppStoreModule = StoreModule.provideStore(appReducer);

export type AppStore = Store<AppState>;
export { Store };
export { Subscription } from "rxjs/Subscription";

/* GAME DATA */
export const getGameState = (appState: AppState) => appState.gameData;
export const getGameStateGold = createSelector(getGameState, fromGameState.getGold);
export const getGameStateGPM = createSelector(getGameState, fromGameState.getGPM);
export const getGameStateXPM = createSelector(getGameState, fromGameState.getXPM);
export const getGameStateBuyback = createSelector(getGameState, fromGameState.getBuyback);

export const getGameStateItems = createSelector(getGameState, fromGameState.getItems);

export const getGameStateHero = createSelector(getGameState, fromGameState.getHero);
export const getGameStatePosition = createSelector(getGameState, fromGameState.getPosition);

export const getGameStateCreepScore = createSelector(getGameState, fromGameState.getCreepScore);
export const getGameStateKDA = createSelector(getGameState, fromGameState.getKDA);
export const getGameStateKillList = createSelector(getGameState, fromGameState.getKillList);

export const getGameStateMatchStatistics = createSelector(getGameState, fromGameState.getMatchStatistics);
export const getGameStateWard = createSelector(getGameState, fromGameState.getWard);

/* UI */
export const getUIState = (appState: AppState) => appState.ui;
export const getUISettingsToggleStatus = createSelector(getUIState, fromUI.getSettingsToggleStatus);

/* VIEWS */
export const getViewState = (appState: AppState) => appState.view;
export const getViews = createSelector(getViewState, fromView.getViews);
export const getColumnCount = createSelector(getViewState, fromView.getColumnCount);
export const getRowCount = createSelector(getViewState, fromView.getRowCount);

export function viewNullDecoratorProperty<T>(propertyKeyOverride: string = null) {
	return (_: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) => {
		const viewName = fromView.GAME_STATE_VIEW_PROPERTY_NAME;
		const get = descriptor.get;
		if (!!propertyKeyOverride) {
			propertyKey = propertyKeyOverride;
		}

		descriptor.get = function (): T {
			if (!this[viewName]) {
				return get();
			}

			return this[viewName][propertyKey];
		}
	}
}
