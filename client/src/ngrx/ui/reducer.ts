import { UIActions, UIActionTypes } from "./actions";
import { electron } from "../../electron";

export interface UIState {
	settingsToggleStatus: boolean;
};

export const initialState: UIState = {
	settingsToggleStatus: false
};

export function uiReducer(state = initialState, action: UIActions): UIState {
	switch (action.type) {
		case UIActionTypes.TOGGLE_SETTINGS: {
			state.settingsToggleStatus = !state.settingsToggleStatus;

			return state;
		}

		case UIActionTypes.WINDOW_MINIMIZE: {
			electron.ipcRenderer.send('ui-minimize');

			return state;
		}

		case UIActionTypes.WINDOW_CLOSE: {
			electron.ipcRenderer.send('ui-close');

			return state;
		}

		default: {
			return state;
		}
	}
};

export const getSettingsToggleStatus = (uiState: UIState) => uiState.settingsToggleStatus;
