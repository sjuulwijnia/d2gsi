import { ViewActions, ViewActionTypes } from "./actions";
import { ViewSetAction } from "./actions";
import { GameStateView } from "./models";

export interface ViewState {
	columns: number;
	rows: number;
	views: GameStateView[];
};

export const initialState: ViewState = {
	columns: 3,
	rows: 5,
	views: []
};

export function viewReducer(state = initialState, action: ViewActions): ViewState {
	switch (action.type) {
		case ViewActionTypes.SET_VIEW: {
			const payload = (action as ViewSetAction).payload;

			state.views[payload.index] = payload.view;

			return state;
		}

		default: {
			return state;
		}
	}
};

export const getViews = (viewState: ViewState) => viewState.views;
export const getColumnCount = (viewState: ViewState) => viewState.columns;
export const getRowCount = (viewState: ViewState) => viewState.rows;
