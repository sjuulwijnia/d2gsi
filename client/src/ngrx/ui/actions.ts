import { Action } from "@ngrx/store";
import { uniqueAction } from "../ngrx-util";

export const UIActionTypes = {
	TOGGLE_SETTINGS: uniqueAction('[UI] Toggle settings'),
	WINDOW_MINIMIZE: uniqueAction('[UI] Minimize window'),
	WINDOW_CLOSE: uniqueAction('[UI] Close window')
};

export class UIToggleSettingsAction implements Action {
	type = UIActionTypes.TOGGLE_SETTINGS;
	payload: any = null;
};

export class UIWindowMinimizeAction implements Action {
	type = UIActionTypes.WINDOW_MINIMIZE;
	payload: any = null;
};

export class UIWindowCloseAction implements Action {
	type = UIActionTypes.WINDOW_CLOSE;
	payload: any = null;
};

export type UIActions =
	UIToggleSettingsAction |
	UIWindowMinimizeAction |
	UIWindowCloseAction;
