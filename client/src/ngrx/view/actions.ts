import { Action } from "@ngrx/store";
import { uniqueAction } from "../ngrx-util";

import { GameStateView } from "./models";

export const ViewActionTypes = {
	SET_VIEW: uniqueAction('[Views] SET VIEW')
};

export interface ViewSetActionModel {
	index: number;
	view: GameStateView;
}
export class ViewSetAction implements Action {
	type = ViewActionTypes.SET_VIEW;

	constructor(public payload: ViewSetActionModel) { }
};

export type ViewActions =
	ViewSetAction;
